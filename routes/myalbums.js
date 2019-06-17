const express = require('express');
const router = express.Router();

router.get('/myalbums', (req, res) => {
    if(req.session.isLoggedIn){
        return res.render('myalbums');
    } else {
        req.flash('info', 'You must login before see further content.');
        return res.redirect('login');
    }
});

module.exports = router;