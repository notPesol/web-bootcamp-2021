const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const session = require('express-session');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/loginDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {
        console.log('DATABASE CONNECTED')
    }).catch(err => {
        console.log(err)
    });


const User = require('./models/user');

const requiredLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login')
    }
    next()
}

app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'thisisnotSecret' }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.send('This is HOME PAGE')
})

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', async (req, res) => {
    const { password, username } = req.body
    const user = new User({ username, password });
    await user.save();
    res.redirect('/')
})

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findAndValidate(username, password);
    if (!user) {
        return res.redirect('/login')
    }
    req.session.user_id = user._id;
    res.render('secret')
});

app.get('/secret', requiredLogin, (req, res) => {
    res.render('secret');
});

app.get('/topsecret', requiredLogin, (req, res) => {
    res.send('THIS IS TOP SECRET PAGE')
})

app.post('/logout', (req, res) => {
    // req.session.user_id = null;
    // or destroy all session data
    req.session.destroy();
    res.redirect('/login')
})

app.listen(port, () => {
    console.log(`App running on PORT: ${port}`)
})