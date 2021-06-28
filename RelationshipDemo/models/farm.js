const mongoose = require('mongoose')
const { Schema } = require('mongoose');
mongoose.connect('mongodb://localhost:27017/relationshipDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {
        console.log('Database Connected')
    })
    .catch(e => {
        console.log("Can't Connect Database!")
        console.log(e)
    });

const farmSchema = Schema({
    name: String,
    city: String,
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
});

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Summer', 'Rainy', 'Spring', 'Fall', 'Winter']
    }
});

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

// Product.insertMany([
//     { name: 'Dark Apple', price: 125, season: 'Summer' },
//     { name: 'Red Apple', price: 100, season: 'Spring' },
//     { name: 'Blue Apple', price: 199, season: 'Fall' }
// ]).then(() => {
//     mongoose.disconnect()
//     console.log('DB is Closed')
// })

// const makeFarm = async () => {
//     const farm = new Farm({
//         name: 'Full Yelly Farm',
//         city: 'Rattaphum'
//     })
//     const apple = await Product.findOne({ name: 'Dark Apple' });
//     farm.products.push(apple)
//     await farm.save();
//     console.log(farm);
// }

// const addProduct = async () => {
//     const farm = await Farm.findOne({ name: 'Full Yelly Farm' });
//     const product = await Product.findOne({ name: 'Blue Apple' });
//     farm.products.push(product);
//     await farm.save();
//     console.log(farm);
// }

Farm.findOne({})
    .populate('products')
    .then(farm => console.log(farm));