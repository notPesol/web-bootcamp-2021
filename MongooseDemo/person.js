const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('CONNECT SUCCESS!!!!!')
    })
    .catch((err) => {
        console.log('ERROR!!!!!')
        console.log(err)
    });

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

// create virtual for get/set
personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`
}).set(function (v) {
    this.first = v.substr(0, v.indexOf(' ')) // เอาค่าจาก ตำแหน่งที่ 0 ถึง ตำแหน่งของ ' ' (space)
    this.last = v.substr(v.indexOf(' ') + 1) // เอาค่าจาก ตำแหน่งของ ' '(space) + 1 ไปจนสุดค่า
})

//middleware
personSchema.pre('save', function (next) {
    // ให้ทำอะไรก่อน save
    console.log('PRESAVE!!!')
    console.log(this)
    next()
})

personSchema.post('save', function (doc) {
    // ให้ทำอะไรหลัง save
    console.log('POSTSAVE!!!')
    console.log(doc)

})

const Person = mongoose.model('Person', personSchema);
// const newPerson = new Person({ first: 'Adam', last: 'Sandler' })

// use get virtial
// newPerson.fullName

//use set virtual
//newPerson.fullName = "Adam Susaoysushi" // newPerson.fullName = "Adam Susaoysushi"
