const express = require('express');
const router = express.Router();

// router for myalbums page for logged in clients
router.get('/myalbums', (req, res) => {
    // checks the client is logged in or not.
    if(req.session.isLoggedIn){
        // If so, then the myalbums page is rendered as response.
        return res.render('myalbums');
    } else {
        /* Someone without proper login tries to access the albums page, redirected to the login page
           with an error message */
        req.flash('info', 'You must login before see further content.');
        // redirect for login page
        return res.redirect('login');
    }
});

module.exports = router;