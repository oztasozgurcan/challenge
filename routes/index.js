const express = require('express');
const router = express.Router();

// index router
router.get('/', (req, res) => {
    return res.render('index');
});

module.exports = router;