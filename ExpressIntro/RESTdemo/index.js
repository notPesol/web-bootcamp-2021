const express = require('express')
const app = express()
const PORT = 8000;
const path = require('path')

// require Method Override for override method
const methodOverride = require('method-override');

// use uuid package for generate id
const { v4: uuid } = require('uuid')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// app use methodOverride
app.use(methodOverride('_method')) // override method


//fake comments
const comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'Yes is so cool!'
    },
    {
        id: uuid(),
        username: 'Joker',
        comment: 'Hello lolol!'
    },
    {
        id: uuid(),
        username: 'Batmaw',
        comment: 'Oh no, I am BATMAW haha!'
    },
    {
        id: uuid(),
        username: 'CatWee',
        comment: 'WTF, What is it!!'
    },
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})

// use post for save data
app.post('/comments', (req, res) => {
    // console.log(req.body)
    const { username, comment } = req.body
    comments.push({ username, comment, id: uuid() })
    res.redirect('/comments')
})

// get 1 comment by id
app.get('/comments/:id', (req, res) => {
    const { id } = req.params
    // use find method สำหรับ คืนค่า comment ที่ตรงกับ id เก็บไว้ในตัวแปรที่ระบุ
    const comment = comments.find(c => c.id === id)
    res.render('comments/detail', { comment })
})

// for edit comment
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params
    const comment = comments.find(c => c.id === id)
    res.render('comments/edit', { comment })
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params
    const newCommentText = req.body.comment
    // search id from path params
    const comment = comments.find(c => c.id === id)
    // Update comment text
    comment.comment = newCommentText
    res.redirect('/comments')

    console.log(newCommentText)
})

app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`)
})