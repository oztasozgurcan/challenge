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
            res.redirect('myalbums');
        } else {
            res.redirect('login');
            console.log('Invalid password.');
        }
    } else {
        res.redirect('login');
        console.log('Invalid email.');
    }

});

module.exports = router;