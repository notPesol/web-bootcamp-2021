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
let comments = [
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
    console.log('comments index page')
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
    console.log('new comment page')
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
    console.log('detail page')
})

// for edit comment
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params
    const comment = comments.find(c => c.id === id)
    res.render('comments/edit', { comment })
    console.log('edit page')
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params
    const newCommentText = req.body.comment
    // search id from path params
    const comment = comments.find(c => c.id === id)
    // Update comment text
    comment.comment = newCommentText
    res.redirect('/comments')

    console.log('back to index')
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params
    // กรองเอาเฉพาะ คอมเม้นที่ id ไม่ตรงกับ id ที่รับมา เขียนทับเก็บไว้ในตัวแปรเดิม (comments)
    comments = comments.filter(c => c.id !== id)
    res.redirect('/comments')
    console.log('back to index')
})

app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`)
})