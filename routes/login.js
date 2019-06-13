const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', passport.authenticate('local',{
    successRedirect: '/myalbums',
    failureRedirect: '/login',
    failureFlash: true
}));

module.exports = router;