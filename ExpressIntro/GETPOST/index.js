const express = require('express');
const app = express()
const PORT = 8000
// ใช้ ข้อมูล แบบข้อความปกติ
app.use(express.urlencoded({ extended: true }))
// ใช้ ข้อมูล แบบ json
app.use(express.json())

// for method GET
app.get('/tacos', (req, res) => {
    const { meat, qty } = req.query
    res.send(`'GET /tacos response' meat: ${meat} qty: ${qty}`)
})

// for method POST
app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body
    res.send(`'POST /tacos response' meat: ${meat} qty: ${qty}`)

})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})