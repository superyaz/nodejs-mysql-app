const { Router } = require('express');

const router = Router();

router.get('/authentication', (req, res) => {
    res.send('Authentication users');
});


module.exports = router;