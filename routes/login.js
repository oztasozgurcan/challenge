const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('login', (req, res) => {
   res.render('myalbums');
});

module.exports = router;