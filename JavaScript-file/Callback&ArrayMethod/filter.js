const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


const sums = numbers.reduce((prev, curr) => (
    prev + curr
))

const minNum = numbers.reduce((min, curr) => {
    if (curr < min) {
        return curr
    }
    return min
})

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
];

// const lessThan10nums = numbers.filter((n) => n < 10)
// const evenNums = numbers.filter((n) => {
//     return n % 2 === 0;
// });
// const oddNums = numbers.filter(n => (
//     n % 2 === 1
// ))


// const badMovies = movies.filter(m => m.score < 70)

// const newMovies = movies.filter(m => {
//     return m.year > 2000
// })


// const goodMovies = movies.filter(m => (
//     m.score > 80
// ))
// const goodTitle = goodMovies.map(m => m.name)
//or
// const goodNameMovies = movies.filter(m => m.score > 80).map(m => m.name);


const bestMovie = movies.reduce((bestMovie, currentMovie) => {
    if (currentMovie.score > bestMovie.score) {
        return currentMovie
    }
    return bestMovie
})

const sum = [2, 4, 6, 8].reduce((prev, current) => prev + current)

const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const maxNum = numberList.reduce((prev, curr) => {
    if (curr > prev) {
        return curr
    }
    return prev
})