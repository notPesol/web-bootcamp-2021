const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');

const mongoose = require('mongoose');
const Farm = require('./models/farm')
const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/FlashDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {
        console.log('Database Connected')
    })
    .catch(e => {
        console.log("Can't Connect Database!")
        console.log(e)
    });

app.use(session({ resave: false, saveUninitialized: false, secret: "CrazySecret" }))

app.use(flash());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
    res.send('IT WORK!');
});

const categories = ['fruit', 'vegetable', 'daily'];


app.use((req, res, next) => {
    res.locals.message = req.flash('success');
    next()
})

// FARM ROUTES
app.get('/farms', async (req, res) => {
    const farms = await Farm.find({});
    res.render('farms/index', { farms });
});

app.get('/farms/new', (req, res) => {
    res.render('farms/new');
});

app.get('/farms/:id', async (req, res) => {
    const farm = await Farm.findById(req.params.id).populate('products');
    res.render('farms/detail', { farm });
});

app.post('/farms', async (req, res) => {
    const farm = new Farm(req.body);
    await farm.save();
    req.flash('success', 'Add Farm Success!')
    res.redirect('/farms');
});

app.get('/farms/:farm_id/products/new', async (req, res) => {
    const { farm_id } = req.params;
    const farm = await Farm.findById(farm_id);
    res.render('products/new', { categories, farm })
});

app.post('/farms/:farm_id/products', async (req, res) => {
    const { farm_id } = req.params;
    const { name, price, category } = req.body;
    const farm = await Farm.findById(farm_id);
    const product = new Product({ name, price, category });
    farm.products.push(product);
    product.farm = farm;
    await farm.save();
    await product.save();
    res.redirect(`/farms/${farm_id}`);
});

app.delete('/farms/:farm_id', async (req, res) => {
    await Farm.findByIdAndDelete(req.params.farm_id);
    req.flash('success', 'Delete Farm success!')
    res.redirect('/farms');
})


// PRODUCT ROUTES

app.get('/products', async (req, res) => {
    const products = await Product.find({});
    res.render('products/index', { products });
    console.log(`You are in ${req.url}`);
});


// route for form
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

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id).populate('farm');
    res.render('products/detail', { product });
    console.log(product)
    // console.log(`You are in ${req.url}`);
})

// create route for Edit product 
app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const foundProduct = await Product.findById(id);
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

})



app.listen(PORT, () => {
    console.log(`Farm app running on PORT: ${PORT}`);
});