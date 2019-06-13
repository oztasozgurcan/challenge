const express = require('express');
const router = express.Router();

router.get('/myalbums', (req, res) => {
    res.render('myalbums');
});

module.exports = router;