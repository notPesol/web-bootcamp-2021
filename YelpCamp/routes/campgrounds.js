const express = require('express');
const router = express.Router();

const Campground = require('../models/campground');

const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');

const { campgroundSchema } = require('../Schema')


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
router.get('/new', (req, res) => {
    res.render('campgrounds/new');
});

// making a campground 
router.post('/', validateCampground, catchAsync(async (req, res, next) => {
    const { campground } = req.body;
    const newCampground = new Campground(campground);
    await newCampground.save();
    req.flash('success', 'Successfully made a Campground!');
    res.redirect(`/campgrounds/${newCampground._id}`);
}));

// route for detail a campground
router.get('/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    const camp = await Campground.findById(id).populate('reviews');
    if (!camp) {
        req.flash('error', 'Cannot find that Campground!');
        res.redirect('/campgrounds');
    }
    res.render('campgrounds/detail', { camp });
}));

// route for edit  campground page
router.get('/:id/edit', catchAsync(async (req, res) => {
    const { id } = req.params;
    const camp = await Campground.findById(id);
    if (!camp) {
        req.flash('error', 'Cannot find that Campground!');
        res.redirect('/campgrounds');
    }
    res.render('campgrounds/edit', { camp })
}));

// update a campground
router.put('/:id', validateCampground, catchAsync(async (req, res) => {
    const { id } = req.params;
    const camp = await Campground.findByIdAndUpdate(id, req.body.campground);
    req.flash('success', 'Successfully updated a Campgrounds!')
    res.redirect(`/campgrounds/${camp._id}`)
}));

// delete a campground
router.delete('/', catchAsync(async (req, res) => {
    const { id } = req.body;
    await Campground.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted a Campground!');
    res.redirect('/campgrounds');
}));

module.exports = router;