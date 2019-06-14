const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', (req, res) => {

    let email = req.body.email;
    let password = req.body.password;

    if(email === 'a@b.com'){
        if(password === "123456"){
            req.flash('info', 'You\'ve passed.');

            req.session.isLoggedIn = true;

            return res.redirect('myalbums');
        } else {
            console.log('Invalid password.');
            return res.redirect('login');
        }
    } else {
        console.log('Invalid email.');
        return res.redirect('login');
    }

});

module.exports = router;