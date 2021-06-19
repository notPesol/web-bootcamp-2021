const express = require('express');
const app = express();
const path = require('path')

// use JSON file
const jsonData = require('./data.json')
// console.log(jsonData)

// add static directory
app.use(express.static(path.join(__dirname, '/public')))

// __dirname คือ directory ของไฟล์ที่เรียกใช้มัน
// ตั่งค่าให้ views อ้างถึง directory views เสมอ เผื่อเวลา start server จาก directory อื่น
app.set('views', path.join(__dirname, '/views'))

const PORT = 8080;

const cowsay = require('cowsay')
const colors = require('colors')
// setting for use EJS 
app.set('view engine', 'ejs')

// use render for ejs file use folder views by default จะใส่ .ejs หรือ ไม่ใส่ก็ได้ครับ
app.get('/', (req, res) => {
    res.render('home')
    console.log('Home Request'.america)
})
// app.get('/', (req, res) => {
//     // res.send('HI')
//     // use render for ejs file use folder views by default จะใส่ .ejs หรือ ไม่ใส่ก็ได้ครับ
//     res.render('home.ejs', {}, (err, html) => {
//         if (err) console.log(err.name, err.message)
//         res.send(html)
//     })
//     console.log('Home Request'.america)
// })

// EJS Condition Syntax:
// <% if (x) { %>
//     statement
// <% } else if (y) { %>
//     statement
// <% } else { %>
//     statement
// <% } %>


// Passing Data to Templates
app.get('/rand', (req, res) => {
    // create data 
    const randNum = Math.floor(Math.random() * 10) + 1;
    // send to arg 2nd
    res.render('random', { rand: randNum })
    console.log('Random Request'.america)
})

app.get('/rand/:num', (req, res) => {
    // create data 
    const { num } = req.params
    const decimal = parseInt(num)
    if (!Number.isNaN(decimal)) {
        const randNum = Math.floor(Math.random() * decimal) + 1;
        // send to arg 2nd
        res.render('random', { rand: randNum })
        console.log(`'rand/${decimal} Request'`.america)
        return
    }
    res.render('random', { rand: 'Query type Error!' })
    console.log(`'rand/${decimal} Request'`.america)

})



app.get('/condition', (req, res) => {
    const rand = Math.floor(Math.random() * 1000) + 1
    res.render('condition', { rand })
    const respondPath = `${req.url} request!`
    console.log(`${cowsay.say({ text: respondPath, r: true })}`.rainbow)
})

app.get('/condition/:number', (req, res) => {
    const { number } = req.params
    res.render('rand', { number })
    const respondPath = `${req.url} request!`
    console.log(`${cowsay.say({ text: respondPath, r: true })}`.rainbow)
})

app.get('/cats', (req, res) => {
    const cats = [
        'Maw', 'DarkMaw', 'OrangeMaw', 'WhiteMaw', 'YelloMaw'
    ]
    res.render('cats', { cats })
    const respondPath = `${req.url} request!`
    console.log(`${cowsay.say({ text: respondPath, r: true })}`.rainbow)
})

// เล่นกับ JSON object
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params
    const result = jsonData[subreddit]

    //Ternary OP
    console.log(result ? result : 'Not found subreddit')

    res.render('r', { subreddit, data: result })
    const respondPath = `${req.url} request!`
    console.log(`${cowsay.say({ text: respondPath, r: true })}`.rainbow)
})

app.listen(PORT, () => {
    console.log('Listening at port', PORT)
})