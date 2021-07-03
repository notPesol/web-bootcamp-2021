const express = require('express');
const router = express.Router();

const Campground = require('../models/campground');

const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');

const { campgroundSchema } = require('../Schema')

const { isLogedIn } = require('../middleware')

const validateCampground = (req, res, next) => {
    const { error } = campgroundSchema.validate(req.body);
    if (error) throw new ExpressError(error, 400);
    next();
}

// route for index of campgrounds
router.get('/', catchAsync(async (req, res, next) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', { campgrounds });

}));

// route for form for user create new campgrounds
router.get('/new', isLogedIn, (req, res) => {
    res.render('campgrounds/new');
});

// making a campground 
router.post('/', isLogedIn, validateCampground, catchAsync(async (req, res, next) => {
    const { campground } = req.body;
    const newCampground = new Campground(campground);
    newCampground.author = req.user._id;
    await newCampground.save();
    req.flash('success', 'Successfully made a Campground!');
    res.redirect(`/campgrounds/${newCampground._id}`);
}));

// route for detail a campground
router.get('/:id', catchAsync(async (req, res) => {
    try {
        const { id } = req.params;
        const camp = await Campground.findById(id).populate('reviews').populate('author');
        console.log(camp);
        if (!camp) throw new Error();
        res.render('campgrounds/detail', { camp });
    } catch (err) {
        req.flash('error', 'Cannot find the Campground!');
        res.redirect('/campgrounds');
    }

}));

// route for edit  campground page
router.get('/:id/edit', isLogedIn, catchAsync(async (req, res) => {
    const { id } = req.params;
    const camp = await Campground.findById(id);
    if (!camp) {
        req.flash('error', 'Cannot find that Campground!');
        res.redirect('/campgrounds');
    }
    res.render('campgrounds/edit', { camp })
}));

// update a campground
router.put('/:id', isLogedIn, validateCampground, catchAsync(async (req, res) => {
    const { id } = req.params;
    const camp = await Campground.findByIdAndUpdate(id, req.body.campground);
    req.flash('success', 'Successfully updated a Campgrounds!')
    res.redirect(`/campgrounds/${camp._id}`)
}));

// delete a campground
router.delete('/', isLogedIn, catchAsync(async (req, res) => {
    const camp = await Campground.findById(req.body.id).populate('author');
    if (!req.user.equals(camp.author)) {
        req.flash('error', 'You do not have permission to delete this!');
        return res.redirect(`/campgrounds/${camp._id}`)
    }
    const { id } = req.body;
    await Campground.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted a Campground!');
    res.redirect('/campgrounds');
}));

module.exports = router;