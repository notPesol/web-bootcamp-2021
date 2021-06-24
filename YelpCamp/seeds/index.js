const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const { descriptors, places } = require('./seedHelpers')

mongoose.connect('mongodb://localhost:27017/yelpCamp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(this, 'connection error!'));
db.once('open', () => {
    console.log('Database connected!')
})

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const randIndexOfCity = Math.floor(Math.random() * cities.length);
        const camp = new Campground({
            location: `${cities[randIndexOfCity].city}, ${cities[randIndexOfCity].state}`,
            title: `${sample(descriptors)} ${sample(places)}`
        });
        await camp.save();
    }
}

// seed ann close database
seedDB().then(() => {
    db.close();
})




