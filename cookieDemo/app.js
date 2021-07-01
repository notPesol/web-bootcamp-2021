const express = require('express');
const app = express();
const port = 3000;

const cookieParser = require('cookie-parser');

app.use(cookieParser('secret'));

app.get('/', (req, res) => {
    const { name = 'No-name' } = req.cookies;
    res.send(`Welcome, ${name}`);
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'Stark');
    res.cookie('animal', 'Yellow Cat')
    res.send('Sent Cookie OK')
});

app.get('/setSignedCookie', (req, res) => {
    res.cookie('data', 'Hello Secret data', { signed: true });
    res.send('Sent Signed Cookie ok!')

});

app.get('/getCookie', (req, res) => {
    console.log(req.cookies)
    console.log(req.signedCookies)
    console.dir(req.signedCookies)
    res.send(req.signedCookies)
})

app.listen(port, () => {
    console.log(`App running on port: ${port}`)
})