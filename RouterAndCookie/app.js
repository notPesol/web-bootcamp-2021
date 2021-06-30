const express = require('express');
const app = express();
const port = 3000;
const sheltersRoutes = require('./routes/shelters')
const dogsRoutes = require('./routes/dogs')
const adminRoutes = require('./routes/admin')

app.use('/shelters', sheltersRoutes);
app.use('/dogs', dogsRoutes);
app.use('/admin', adminRoutes)

app.listen(port, () => {
    console.log(`App running on PORT: ${port}`)
})