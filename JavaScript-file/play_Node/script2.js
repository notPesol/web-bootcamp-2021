const jokes = require('give-me-a-joke');

jokes.getRandomCNJoke((j) => {
    console.log(j)
})