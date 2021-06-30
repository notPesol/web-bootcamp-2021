const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('DOGS INDEX');
});

router.post('/', (req, res) => {
    res.send('MAKE DOG');
});

router.get('/:id', (req, res) => {
    res.send('DOGS DETAIL');
});

router.get('/:id/edit', (req, res) => {
    res.send('EDIT DOG');
});

module.exports = router;