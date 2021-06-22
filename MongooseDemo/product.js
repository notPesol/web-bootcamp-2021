const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('CONNECT SUCCESS!!!!!')
    })
    .catch((err) => {
        console.log('ERROR!!!!!')
        console.log(err)
    });

// Schema Validations
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be POSITIVE!!!'] // custom err
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: {
        type: [String],
    },
    qty: {
        inStore: {
            type: Number,
            default: 0
        },
        online: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
});

// Create Instance Method
productSchema.methods.greet = function () {
    console.log('Hi, you made from Product')
    console.log(`Product name is => ${this.name}`)
}

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale
    this.save()
    return this
}

productSchema.methods.addCategory = function (...newCate) {
    this.categories.push(...newCate)
    this.save()
    return this
}

// Create Static Method  ต้องใช้งานผ่าน Model/Class เท่านั้น!!!
productSchema.statics.setOnsaleAll = async function () {
    const result = await this.updateMany({}, { onSale: true })
    console.log(result)

}

productSchema.statics.offOnsaleAll = function () {
    this.updateMany({}, { onSale: false }, (err, res) => {
        err && console.log(err)
        console.log(res)
    })

}

const Product = mongoose.model('Product', productSchema);

// Create Mrthod ส่วนตัว 55
async function findAndTell(name) {
    const foundProduct = await Product.findOne({ name: name })
    if (foundProduct) foundProduct.greet()
    else console.log('No document!!!')
}

async function findAndToggleOnSale(name) {
    const foundProduct = await Product.findOne({ name: name })
    console.log(foundProduct)
    await foundProduct.toggleOnSale()
    console.log(foundProduct)
}

async function findAndAddCategory(name, ...newCate) {
    const foundProduct = await Product.findOne({ name: name })
    console.log(foundProduct)
    await foundProduct.addCategory(...newCate)
    console.log(foundProduct)
}




// const product = new Product({ name: 'Table Tennis', price: 115.5, categories: ['Sport'] })
// product.save()
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => {
//         console.log("HAVE ERROR.....")
//         console.log(err)
//     })

///////////////////////////////////////////////////////// ใส่ option runValidators เพื่อ validate ข้อมูลก่อน
// Product.findOneAndUpdate({ name: 'Super Notebook' }, { price: -125.90 }, { new: true, runValidators: true })
//     .then(res => {
//         console.log("IT WORK!")
//         console.log(res)
//     })
//     .catch(err => {
//         console.log(err)
//     })