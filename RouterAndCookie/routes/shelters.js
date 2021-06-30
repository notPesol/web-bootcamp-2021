const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('SHELTERS INDEX');
});

router.post('/', (req, res) => {
    res.send('MAKE SHELTER');
});

router.get('/:id', (req, res) => {
    res.send('VIEW DETAIL SHELTER');
});

router.get('/:id/edit', (req, res) => {
    res.send('EDIT SHELTER');
});

module.exports = router;