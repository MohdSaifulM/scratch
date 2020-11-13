const router = require('express').Router();
// const User = require('../models/user.models');
const passport = require('../lib/passportConfig');

router.get('/register', (req,res) => {
    res.render("auth/register");
});

router.get('/login', (req,res) => {
    res.render("auth/login");
});

router.post('/register', async(req,res) => {
    try {
        let { email, password } = req.body;

        let user = new User( {      
            email, 
            password,
        });

        await user.save();
        res.redirect("/");

    } catch (error) {
        console.log(error);
    }
});

router.post('/login', 
  passport.authenticate('local', { 
    successRedirect: "/",
    failureRedirect: '/auth/login',
    successFlash: "Welcome to BRB",
    failureFlash: "Wrong details", 
    }),
  function(req, res) {
    res.redirect('/');
});


//LOGOUT
router.get("/logout", (req,res) => {
    req.logOut();
    req.flash("success", "Sad to see you go!");
    res.redirect("/auth/login");
    req.flash("success", "Sad to see you go!");
})


module.exports = router;