const jokes = require('give-me-a-joke')
const colors = require('colors')
const cowsay = require('cowsay')

jokes.getRandomDadJoke((j) => {
    console.log(j.america)
    console.log(cowsay.say({ text: "Hello", r: true }))
})