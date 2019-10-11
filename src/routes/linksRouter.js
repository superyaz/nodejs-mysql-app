const { Router } = require('express');
const pool = require('../database');
const router = Router();

router.get('/links', (req, res) => {
    res.send('Links users');
});


module.exports = router;