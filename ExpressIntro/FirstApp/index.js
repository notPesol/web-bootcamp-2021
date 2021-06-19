const express = require('express')
const app = express()
const port = 8080

const cowsay = require('cowsay')
const colors = require('colors')
// app.use((req, res) => {
//     console.log('WE GOT A NEW REQUEST!')
//     res.send('Hello we got your request!')
//     res.send({ id: 1, color: 'red' })
//     res.send('<h1>This is my web page!</h1>')
// })

// root path
app.get('/', (req, res) => {
    console.log(('ROOT REQUEST!').america)
    res.send('Welcome to Home page!')
})

app.get('/cats', (req, res) => {
    console.log(('CATS REQUEST!').rainbow)
    res.send('MEOW!')
})

app.get('/dogs', (req, res) => {
    console.log(('DOGS REQUEST!').rainbow)
    res.send('WOOF!')
})

// Path Parameters
app.get('/cats/:name', (req, res) => {
    // req params
    // console.log(req.params)
    // extract path params
    const { name } = req.params
    res.send(`This is cats/${name} path`)
})

app.get('/pets', (req, res) => {
    console.log('PETS REQUEST!'.rainbow)
    res.send(`This is Pets Home page`)
})

// Path Parameters
app.get('/pets/:petId', (req, res) => {
    const { petId } = req.params
    console.log(petId.america)
    res.send(`This is pets/${petId} path`)
})

// Path Parameters
app.get('/pets/:petId/:petName', (req, res) => {
    const { petId, petName } = req.params
    console.log(petId.america, petName.rainbow)
    res.send(`This is pets/${petId}/${petName} path`)
})

// Query String
app.get('/search', (req, res) => {
    console.log('SEARCH REQUEST!'.america)
    //extract query string
    const { q } = req.query
    if (!q) {
        res.send('NOTHING FOUND!!')
        return
    }
    console.log(q.green)
    res.send(`<h1>You Search for: ${q}</h1>`)
})

app.get('*', (req, res) => {
    res.send(`I don't know that path!!`)
})



app.listen(port, () => {
    console.log(cowsay.say({ text: 'Server is running!', r: true }).random)
    console.log(`App listening at http://localhost:${port}`)

})