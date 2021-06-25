const express = require('express');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const path = require('path');
const PORT = 3000;
const mongoose = require('mongoose');
const Campground = require('./models/campground');

const app = express();

//set engine
app.engine('ejs', ejsMate);
// set view engine and path of views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// use buitin middleware for use req.body
app.use(express.urlencoded({ extended: true }));
// use method-override
app.use(methodOverride('_method'));

// connect to mongo
mongoose.connect('mongodb://localhost:27017/yelpCamp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// handle...
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error!'));
db.once('open', () => {
    console.log('Database connected!')
})

// root page
app.get('/', (req, res) => {
    res.render('home');
});

// route for index of campgrounds
app.get('/campgrounds', async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', { campgrounds });

});

// route for form for user create new campgrounds
app.get('/campgrounds/new', (req, res) => {
    res.render('campgrounds/new');
});

// making a campground 
app.post('/campgrounds', async (req, res) => {
    const { campground } = req.body;
    const newCampground = new Campground(campground);
    await newCampground.save();
    res.redirect(`/campgrounds/${newCampground._id}`);
});

// route for detail a campground
app.get('/campgrounds/:id', async (req, res) => {
    const { id } = req.params;
    const camp = await Campground.findById(id);
    res.render('campgrounds/detail', { camp });
});

// route for edit  campground page
app.get('/campgrounds/:id/edit', async (req, res) => {
    const { id } = req.params;
    const camp = await Campground.findById(id);
    res.render('campgrounds/edit', { camp })
});

// update a campground
app.put('/campgrounds/:id', async (req, res) => {
    const { id } = req.params;
    const camp = await Campground.findByIdAndUpdate(id, req.body.campground);
    res.redirect(`/campgrounds/${camp._id}`)
});

// delete a campground
app.delete('/campgrounds', async (req, res) => {
    const { id } = req.body;
    const deletedCamp = await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds');
    console.log(deletedCamp, 'is DELETED !');
})


// open server
app.listen(PORT, () => {
    console.log('App listening on PORT: ', PORT)
})