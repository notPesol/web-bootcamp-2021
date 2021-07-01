const express = require('express');
const session = require('express-session');
const app = express();

const sessOption = { secret: 'NoSecretHaha', resave: false, saveUninitialized: false }
app.use(session(sessOption));

app.get('/viewcount', (req, res) => {
    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }

    res.send(`${req.session.count}`)
})

app.get('/register', (req, res) => {
    const { username } = req.query;
    req.session.username = username;
    res.redirect('/greet')
})

app.get('/greet', (req, res) => {
    const { username = 'Anonymous' } = req.session;
    res.send(`Welcome back, ${username}`)
})

app.listen(3000, () => {
    console.log('App is running...')
})