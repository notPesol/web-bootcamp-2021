const express = require('express')
const app = express()
const path = require('path')
const methodOr = require('method-override')
const PORT = 8000

// ดึงฟังก์ชัน สุ่ม รหัส
const { v4: uuid } = require('uuid')

// บอกให้ express ใช้ method override
app.use(methodOr('_method'))

//บอกให้ express ใช้ static file ที่โฟลเดอร์ public
app.use(express.static(path.join(__dirname, 'public')))

// ต้องบอก express เพื่อให้ จัดการข้อมูลจาก method POST ได้
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// ตั้งค่า view engine เป็น ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

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

app.get('/', (req, res) => {
    res.send('IT WORK!')
    console.log(`You are in ${req.url}`)
})

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
    console.log(`You are in ${req.url}`)
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
    console.log(`You are in ${req.url}`)
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params
    const comment = comments.find(c => c.id === id)
    res.render('comments/detail', { comment })
    console.log(`You are in ${req.url}`)
})







app.all('*', (req, res) => {
    res.status(404).send('NOT FOUND!!')
})

app.listen(PORT, () => {
    console.log(`Listening port: ${PORT}`)
})