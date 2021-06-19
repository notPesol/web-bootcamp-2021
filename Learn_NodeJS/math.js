// การใช้ module.exports

const add = (x, y) => x + y;

const square = x => x * x;

const PI = 3.14;

// module.exports.add = add;
// module.exports.square = square;
// module.exports.PI = PI;

// or
// exports.square = square
// exports.add = add
// exports.PI = PI

// or
// module.exports = {
//     add: add,
//     square: square,
//     PI: PI
// }

// or
// module.exports = {
//     add(x,y){
//         return x +y
//     },
//     square(x){
//         return x * x
//     },
//     PI: 3.14
// }

// or export class
// module.exports = function Math() {
//     this.add = (x, y) => x + y
//     this.square = x => x * x
//     this.PI = 3.14
// }

// or export function
// module.exports = (msg) => {
//     console.log(msg)
// }

// or export class inside 
module.exports.Person = function (name, age) {
    this.name = name
    this.age = age
    this.fullDetail = () => {
        return `${this.name} ${this.age}`
    }
}

module.exports.Pet = function (name) {
    this.name = name
    this.eat = () => {
        return `${this.name} eating`
    }
}


module.exports.multiply = (x, y) => {
    return x * y
}