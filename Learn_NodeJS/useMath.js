// เรียกใช้ module math
// const math = require('./math')

// console.log(math.add(1, 2))
// console.log(math.PI)
// console.log(math.square(9))

// const { add, PI, square } = require('./math')

// console.log(add(1, 2))
// console.log(PI)
// console.log(square(9))

// const math = require('./math')
// const m1 = new math()
// console.log(m1.square(9))

// const math = require('./math');
// math('lololol')

// const math = require('./math');

// const p1 = new math.Person('Adam', 199)
// console.log(p1.fullDetail())

// const pet1 = new math.Pet('Cater')
// console.log(pet1.eat())

const { Person, Pet, multiply } = require('./math')

const person1 = new Person('Adam', 99)
console.log(person1.fullDetail())

const pet1 = new Pet('Catter')
console.log(pet1.eat())

const mtp1 = multiply(2, 5);
console.log(mtp1)