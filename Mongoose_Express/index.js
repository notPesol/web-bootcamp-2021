const express = require('express');
const app = express();
const PORT = 8000;
const path = require('path');

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

app.get('/products', async (req, res) => {
    const products = await Product.find({});
    res.render('products/index', { products });
    console.log(`You are in ${req.url}`);
});

// route for form
app.get('/products/new', (req, res) => {
    res.render('products/new');
    console.log(`You are in ${req.url}`);
});

// route create product
app.post('/products', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.redirect(`/products/${product._id}`);
});

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/detail', { product });
    console.log(`You are in ${req.url}`);
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const foundProduct = await Product.findById(id);
    res.render('products/edit', { product: foundProduct });
    console.log(`You are in ${req.url}`);
})
app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`);
})