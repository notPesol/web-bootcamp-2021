const express = require('express');
const app = express();
const PORT = 8000;
const path = require('path');
const methodOverride = require('method-override');
const AppError = require('./AppError');

const Product = require('./models/product');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {
        console.log('Mongoose OK!');

    })
    .catch(err => {
        console.log('Mongoose ERROR!');
        console.log(err);
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set middleware for use other method
app.use(express.urlencoded({ extended: true }));
// use method override
app.use(methodOverride('_method'))


const categories = ['fruit', 'vegetable', 'daily'];

// สร้างฟังก์ชันเพื่อจับ Error โดยเฉพาะ สุดยอดดดดดดดดดดดดดด
function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(err => next(err));
    }
}

// ยัด try catch ให้หมดทุก route/path 555555555555555555
app.get('/products', wrapAsync(async (req, res, next) => {
    const { category } = req.query
    if (category) {
        const products = await Product.find({ category });
        res.render('products/index', { products, category, categories });
    } else {
        const products = await Product.find({});
        res.render('products/index', { products, category: 'All', categories });
    }
    console.log(`You are in ${req.url}`);
}));


// route for new form
app.get('/products/new', (req, res) => {
    res.render('products/new', { categories });
    console.log(`You are in ${req.url}`);
});

// route create product
app.post('/products', wrapAsync(async (req, res, next) => {
    // จัดการกับ mongoose error use try catch
    const product = new Product(req.body);
    await product.save();
    res.redirect(`/products/${product._id}`);

}));

// for async must have next arg for errer handler
app.get('/products/:id', wrapAsync(async (req, res, next) => {
    // ใช้ try catch ดีสุด 5555555
    const { id } = req.params;
    const product = await Product.findById(id);
    // handler in async as next();
    if (!product) {
        throw new AppError('Product not found!', 404); // use return เพื่อไม่ให้ทำคำสั่งถัดไป
    }
    res.render('products/detail', { product });
    console.log(`You are in ${req.url}`);

}));

// create route for Edit product 
app.get('/products/:id/edit', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const foundProduct = await Product.findById(id);
    // handler in async as next();
    if (!foundProduct) {
        throw new AppError('Product not found!', 404); // use return เพื่อไม่ให้ทำคำสั่งถัดไป
    }
    res.render('products/edit', { product: foundProduct, categories });
    console.log(`You are in ${req.url}`);

}));
// route for use update
app.put('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    res.redirect('/products/' + product._id)
    console.log(product);
}));

// route for delete product
app.delete('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);
    console.log('Deleted', deleteProduct, 'success!');
    res.redirect('/products');
}));

// make function for handler error
function handleValidationError(err) {
    console.dir(err);
    return new AppError(`Validation Failed...${err.message}`, 400);
}

app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') err = handleValidationError(err);
    next(err)
})

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong!' } = err;
    res.status(status).send(message);
})

app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`);
})