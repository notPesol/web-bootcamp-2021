const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if (req.query.isAdmin === 'true') {
        next();
    } else {
        res.send('YOU ARE NOT ADMIN!')
    }
});

router.get('/', (req, res) => {
    res.send('THIS IS ADMIN INDEX')
});

router.get('/secret', (req, res) => {
    res.send('THIS IS ADMIN SECRET')
});

router.get('/delete', (req, res) => {
    res.send('THIS IS ADMIN DELETE')
});

module.exports = router;