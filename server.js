require('dotenv').config();
const express = require('express');
const server = express();
const flash = require("connect-flash");
const session = require('express-session');
const passport = require('./lib/passportConfig');
const usercheck = require('./lib/usercheck');

require('./lib/connection');


// middleware
server.use(express.urlencoded({extended: true}));
server.use(express.static('public'));
server.set('view engine', 'ejs');
server.use(require('express-ejs-layouts'));

server.use(session({
    secret: process.env.SECRET,  //put in env file. shared between client and server side
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 4000000 },
  })
);
// important
server.use(passport.initialize());  //init passport
server.use(passport.session());   
server.use(flash());
server.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  res.locals.alerts = req.flash(); 
  next();
});


// middleware for routes
server.use("/auth", require("./routes/auth.routes")); ;


// listening
server.listen(process.env.PORT, () => console.log(`listening on ${process.env.PORT}`));