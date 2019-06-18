const express = require('express');
const router = express.Router();

// router for login form page
router.get('/login', (req, res) => {
    return res.render('login');
});

// router for logout page
router.get('/logout', (req, res) => {
    // sets the logged in feature to false, thus the client is logged out.
    req.session.isLoggedIn = false;
    // flash message is shown as successful logout.
    req.flash('info', 'You\'ve successfully logged out.');
    // returns the index page
    return res.render('index');
});

// router for login form submission
router.post('/login', (req, res) => {

    // email input inside html
    let email = req.body.email;
    // password input inside html
    let password = req.body.password;

    // dummy email and password is set to just show the functionality
    if (email === 'a@b.com') {
        if (password === "123456") {
            // flash message is sent to the client
            req.flash('info', 'You\'ve successfully logged in.');
            // the client is set as logged into the website
            req.session.isLoggedIn = true;
            // myalbums page is shown after successful login
            return res.redirect('myalbums');
        } else {
            // password error, sent an error to the client
            req.flash('info', 'Invalid password, try again.');
            // redirected to the login page until a successful login
            return res.redirect('login');
        }
    } else {
        // email error, sent an error to the client
        req.flash('info', 'Invalid email address, try again.');
        // redirected to the login page until a successful login
        return res.redirect('login');
    }

});

module.exports = router;