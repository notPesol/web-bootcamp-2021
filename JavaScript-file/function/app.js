// function randomFunc() {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function () {
//             console.log("This is first func")
//         }
//     }
//     return function () {
//         alert("this is second func")
//     }
// }

// function makeBetween(min, max) {
//     return function (num) {
//         const isBetween = num >= min && num <= max;
//         return isBetween;
//     }
// }

// const isChild = makeBetween(0, 18);
// const adam = isChild(17)
// console.log(adam)

// const cat = {
//     name: "Adam Sandler",
//     color: "Orange",
//     breed: "Stone cat",
//     meow() {
//         console.log('This is: ', this)
//         console.log(`${this.name} say meowwwww`)
//     }
// }