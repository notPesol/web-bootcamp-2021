const express = require('express');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const path = require('path');
const PORT = 3000;
const mongoose = require('mongoose');
const { campgroundSchema, reviewSchema } = require('./Schema')
const Campground = require('./models/campground');
const Review = require('./models/review')

const app = express();

const catchAsync = require('./utils/catchAsync');
const ExpressError = require('./utils/ExpressError');

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
});

const validateCampground = (req, res, next) => {
    const { error } = campgroundSchema.validate(req.body);
    if (error) throw new ExpressError(error, 400);
    next();
}

const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(d => d.message);
        throw new ExpressError(msg, 400);
    }
    next();

}

// root page
app.get('/', (req, res) => {
    res.render('home');
});

// route for index of campgrounds
app.get('/campgrounds', catchAsync(async (req, res, next) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', { campgrounds });

}));

// route for form for user create new campgrounds
app.get('/campgrounds/new', (req, res) => {
    res.render('campgrounds/new');
});

// making a campground 
app.post('/campgrounds', validateCampground, catchAsync(async (req, res, next) => {
    const { campground } = req.body;
    const newCampground = new Campground(campground);
    await newCampground.save();
    res.redirect(`/campgrounds/${newCampground._id}`);
}));

// route for detail a campground
app.get('/campgrounds/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    const camp = await Campground.findById(id).populate('reviews');
    res.render('campgrounds/detail', { camp });
}));

// route for edit  campground page
app.get('/campgrounds/:id/edit', catchAsync(async (req, res) => {
    const { id } = req.params;
    const camp = await Campground.findById(id);
    res.render('campgrounds/edit', { camp })
}));

// update a campground
app.put('/campgrounds/:id', validateCampground, catchAsync(async (req, res) => {
    const { id } = req.params;
    const camp = await Campground.findByIdAndUpdate(id, req.body.campground);
    res.redirect(`/campgrounds/${camp._id}`)
}));

// delete a campground
app.delete('/campgrounds', catchAsync(async (req, res) => {
    const { id } = req.body;
    const deletedCamp = await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds');
}));

// make a review
app.post('/campgrounds/:id/reviews', validateReview, catchAsync(async (req, res) => {
    const camp = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    camp.reviews.push(review);
    await review.save();
    await camp.save();
    res.redirect(`/campgrounds/${camp._id}`);

}));

//delete a review
app.delete('/campgrounds/:id/reviews/:reviewId', catchAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/campgrounds/${id}`);
}));

app.all('*', (req, res, next) => {
    next(new ExpressError('Page not found!', 404));
})

// route for handle error
app.use((err, req, res, next) => {
    const { message = 'SOMETHING WENT WRONG!', status = 500, stack } = err;
    res.status(status).render('error', { message, status, stack });
})

// open server
app.listen(PORT, () => {
    console.log('App listening on PORT: ', PORT)
})