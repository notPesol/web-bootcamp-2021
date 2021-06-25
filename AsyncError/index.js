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


const categories = ['fruit', 'vegetable', 'daily', 'mushroom', 'watch', 'computer'];


app.get('/products', async (req, res) => {
    const { category } = req.query

    if (category) {
        const products = await Product.find({ category });
        res.render('products/index', { products, category, categories });
    } else {
        const products = await Product.find({});
        res.render('products/index', { products, category: 'All', categories });
    }

    console.log(`You are in ${req.url}`);
});


// route for new form
app.get('/products/new', (req, res) => {
    res.render('products/new', { categories });
    console.log(`You are in ${req.url}`);
});

// route create product
app.post('/products', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.redirect(`/products/${product._id}`);
});

// for async must have next arg for errer handler
app.get('/products/:id', async (req, res, next) => {
    // ใช้ try catch ดีสุด 5555555
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        // handler in async as next();
        if (!product) {
            return next(new AppError('Product not found!', 404)); // use return เพื่อไม่ให้ทำคำสั่งถัดไป
        }
    } catch (error) {
        return next(new AppError('Product not found!', 404));
    }

    res.render('products/detail', { product });
    console.log(`You are in ${req.url}`);
})

// create route for Edit product 
app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const foundProduct = await Product.findById(id);
    // handler in async as next();
    if (!foundProduct) {
        return next(new AppError('Product not found!', 404)); // use return เพื่อไม่ให้ทำคำสั่งถัดไป
    }
    res.render('products/edit', { product: foundProduct, categories });
    console.log(`You are in ${req.url}`);
})
// route for use update
app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    res.redirect('/products/' + product._id)
    console.log(product);

})

// route for delete product
app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);
    console.log('Deleted', deleteProduct, 'success!');
    res.redirect('/products');

});

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong!' } = err;
    res.status(status).send(message);
})

app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`);
})