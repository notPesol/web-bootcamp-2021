const express = require('express')
const app = express()
const PORT = 8000;
const path = require('path')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//fake comments
const comments = [
    {
        username: 'Todd',
        comment: 'Yes is so cool!'
    },
    {
        username: 'Joker',
        comment: 'Hello lolol!'
    },
    {
        username: 'Batmaw',
        comment: 'Oh no, I am BATMAW haha!'
    },
    {
        username: 'CatWee',
        comment: 'WTF, What is it!!'
    },
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`)
})