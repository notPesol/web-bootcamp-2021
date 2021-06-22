
const mongoose = require('mongoose');
const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {
        console.log('Mongoose OK!')

    })
    .catch(err => {
        console.log('Mongoose ERROR!')
        console.log(err)
    })

// const p = new Product({
//     name: 'Legend Grape',
//     price: 199.99,
//     category: 'fruit'
// });

// p.save()
//     .then(p => {
//         console.log(p)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// const newP = [
//     {
//         name: 'God Orange',
//         price: 5.95,
//         category: 'fruit'
//     },
//     {
//         name: 'God Carrot',
//         price: 9.95,
//         category: 'vegetable'
//     },
//     {
//         name: 'God Milk',
//         price: 8.95,
//         category: 'daily'
//     },
//     {
//         name: 'Green Grape',
//         price: 99.95,
//         category: 'fruit'
//     },
//     {
//         name: 'Devil Lemon',
//         price: 159.95,
//         category: 'fruit'
//     },
//     {
//         name: 'Evil Papaya',
//         price: 89.95,
//         category: 'fruit'
//     },
//     {
//         name: 'Hill Banana',
//         price: 9.95,
//         category: 'fruit'
//     },
//     {
//         name: 'Dark Milk',
//         price: 60.5,
//         category: 'daily'
//     },
// ]

// Product.insertMany(newP)
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => {
//         console.log(err)
//     })