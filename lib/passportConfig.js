var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user.models');


passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
    done(err, user);
  });
});


//LOCAL LOGIN
passport.use(new LocalStrategy(
    {
        usernameField: "email",      //set this. passport uses username as default
        passwordField: "password",
    },
  function(username, password, done) {
    User.findOne({ email: username }, function (err, user) {
      if (err) { 
          console.log(err);
          return done(err); }
      if (!user) {
          console.log("user", "incorrect email");
        return done(null, false, { message: 'Incorrect email.' });
      }
      if (!user.validPassword(password)) {
          console.log("incorrect password");
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));


module.exports= passport;