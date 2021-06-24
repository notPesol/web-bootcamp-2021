const express = require('express');
const app = express();
const morgan = require('morgan');


// app.use(morgan('common'));

// create own middleware testttttt
// app.use((req, res, next) => {
//     console.log('This is my first middleware');
//     return next();
//     console.log('My first middleware after call next()');
// });
// app.use((req, res, next) => {
//     console.log('this is my second middleware');
//     next();
// });

// more pratice
// app.use((req, res, next) => {
//     // console.log(req.method, req.path);
//     // req.method = 'GET';
//     req.requestTime = Date.now();
//     // console.log(req.requestTime)
//     next();
// })

// play with fake password haha
app.use('/login', (req, res, next) => {
    // console.log(req.query);
    const { password } = req.query;
    if (password === 'demon111') {
        next();
    }
    res.send('PASSWORD INCORRECT!!!');
});

// or
const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'demon111') {
        next();
    }
    res.send('I NEED TRUE PASSWORD BROTHER!!!');
};
// test use in this route
app.get('/secret', verifyPassword, (req, res) => {
    res.send('Welcome to my SECRET path brother haha');
});


// specifie path
app.use('/dogs', (req, res, next) => {
    console.log('go to dogs !');
    next();
})

app.get('/', (req, res) => {
    // console.log(req.requestTime);
    res.send('Home');
});

app.get('/dogs', (req, res) => {
    res.send('WOOF WOOF');
});

app.get('/login', (req, res) => {
    res.send('Welcome back!!!');
})

// not found
app.use((req, res) => {
    res.status(404).send('<h1>NOT FOUND!</h1>');
})

app.listen(3000, () => {
    console.log('App is running!')
})