const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/demoApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('CONNECT SUCCESS!!!!!')
    })
    .catch((err) => {
        console.log('ERROR!!!!!')
        console.log(err)
    })


// สร้าง โครงสร้าง ตาราง หรือ โครงสร้าง collection    
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

// สร้างโมเดล โดยใช้ โครงสร้าง movieSchema (การใช้ใน mongo shell จะเป้นตัวพิมพ์เล็ก และ เติม s ให้อัตโนมัติ)
const Movie = mongoose.model('Movie', movieSchema)

// สร้าง record หรือ document ใน Movie collection (ยังไม่บันทึก)
// const darkSoul3 = new Movie({ title: 'Dark Soul 3', year: 2018, score: 9.5, rating: 'R' })

// การ save
// darkSoul3.save()

// insertMany
// Movie.insertMany([
//     { title: 'Outlast', year: 2015, score: 8.5, rating: 'R' },
//     { title: 'Evil 3', year: 2011, score: 7.5, rating: 'R' },
//     { title: 'Spiderman', year: 2015, score: 8.1, rating: 'T' },
//     { title: 'Undying', year: 2010, score: 6.2, rating: 'R' },
//     { title: 'Ironman', year: 2009, score: 8.8, rating: 'R' }
// ])
//     .then(data => {
//         console.log("IT WORK!")
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// Movie.find({ rating: 'T' }, (err, data) => {
//     if (err) throw err
//     console.log(data)
// })
const allMovie = []
Movie.find({ year: { $gte: 2011 } })
    .then(result => {
        allMovie.push(...result)
    })