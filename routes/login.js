const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    return res.render('login');
});

router.get('/logout', (req, res) => {
    req.session.isLoggedIn = false;
    req.flash('info', 'You\'ve successfully logged out.');
    return res.render('index');
});

router.post('/login', (req, res) => {

    let email = req.body.email;
    let password = req.body.password;

    if(email === 'a@b.com'){
        if(password === "123456"){
            req.flash('info', 'You\'ve successfully logged in.');
            req.session.isLoggedIn = true;

            return res.redirect('myalbums');
        } else {
            req.flash('info', 'Invalid password, try again.');
            return res.redirect('login');
        }
    } else {
        req.flash('info', 'Invalid email address, try again.');
        return res.redirect('login');
    }

});



module.exports = router;