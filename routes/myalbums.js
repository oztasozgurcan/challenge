const express = require('express');
const router = express.Router();

/*
const redis = require('redis');
const client = redis.createClient();

client.on('error', (err) => {
    console.log("Error " + err);
});
*/

// router for myalbums page for logged in clients
router.get('/myalbums', (req, res) => {
    // checks the client is logged in or not.
    if (req.session.isLoggedIn) {
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

/*
router.get('/api/myalbums', (req, res) => {

    const query = (req.query.query).trim();

    const url = 'https://jsonplaceholder.typicode.com/albums/1/photos';

    return client.get(`url:${query}`, (err, result) => {

        if(result){
            const output = JSON.parse(result);
            return res.status(200).json(output);
        } else {
            var xhr = new XMLHttpRequest();

            return xhr.open('GET', url).then(response => {
                const responseJSON = response.data;
                client.setex(`url:${query}`, 3600, JSON.stringify({ source: 'Redis Cache', responseJSON}));
                return res.status(200).json({ source: 'Placeholder API', responseJSON});
            }).catch(err => {
                return res.json(err);
            });
        }

    });
});
*/

module.exports = router;