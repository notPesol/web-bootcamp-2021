const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const movies = [
    {
        name: "Prirate of Thailand",
        score: 70,
        year: 1997
    },
    {
        name: "Django Cazy",
        score: 80,
        year: 1990
    },
    {
        name: "Lion King",
        score: 85,
        year: 2005
    },
    {
        name: "Titan ...",
        score: 65,
        year: 2014
    },
    {
        name: "Green Hippo",
        score: 95,
        year: 1950
    }
]

// numbers.forEach(function (num) {
//     console.log(num * num);
// })

// movies.forEach(function (movie) {
//     console.log(`${movie.name}-${movie.score}/100`)
// });

// const doubles = numbers.map(function (num) {
//     return num * 2
// })

// const titles = movies.map(function (movie) {
//     return movie.name
// })

// const titles = movies.map(function (movie) {
//     return movie.name.toUpperCase()
// })

// const scores = movies.map(function (movie) {
//     return movie.score;
// })

// function cleanNames(array) {
//     const newArray = array.map(function (arr) {
//         return arr.trim();
//     });
//     return newArray;
// }

// const newArr = cleanNames(["  dsfdsf ", "fdsfdsf fdsfdsf     ", "Pesol   "]);

// Callback with arrow function

const doubles = numbers.map(num => num * 2);

const moviesData = movies.map(movie => `${movie.name}: ${movie.score} score`)

const numsPlus10 = numbers.map(num => {
    return num + 10
})

const numsTime10 = numbers.map(num => (
    num * 10
))