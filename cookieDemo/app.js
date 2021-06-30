const express = require('express');
const app = express();
const port = 3000;

const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/', (req, res) => {
    const { name = 'No-name' } = req.cookies;
    res.send(`Welcome, ${name}`);
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'Stark');
    res.cookie('animal', 'Yellow Cat')
    res.send('Sent Cookie OK')
})

app.listen(port, () => {
    console.log(`App running on port: ${port}`)
})