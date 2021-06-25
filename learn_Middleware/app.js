const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const AppError = require('./AppError');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

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
    // res.send('I NEED TRUE PASSWORD BROTHER!!!');
    // res.status(401);
    // throw new Error('PASSWORD REQUIRED!!');
    // use Custom Error class
    throw new AppError('Password required', 401);
};

// error Express auto throw error
app.get('/error', (req, res) => {
    dark.lol(); //make error haha
})


// test use in this route
app.get('/secret', verifyPassword, (req, res) => {
    res.send('Welcome to my SECRET path brother haha');
});

// create fake admin route
app.get('/admin', (req, res) => {
    if (req.query.pass === '123') res.send('Welcome ADMIN');
    throw new AppError('You are not an ADMIN!', 403);
})

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
    // res.status(404).send('<h1>NOT FOUND!</h1>');
    throw new AppError('NOT FOUND!', 404);
})

// make custom error handler
// app.use((err, req, res, next) => {
//     console.log('ERROR!!!!!!!!!!!');
//     res.status(500).send('ERROR');
// });

// route for have error
// app.use((err, req, res, next) => {
//     const { status = 500, message = 'Something went wrong!' } = err;
//     res.status(status).send(message);
// })

// route for error page only
app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong!' } = err;
    res.render('error', { status, message });
})

app.listen(3000, () => {
    console.log('App is running!')
});