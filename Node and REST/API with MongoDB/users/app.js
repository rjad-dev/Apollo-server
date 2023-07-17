const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const usersRoutes = require('./routes/users.js')
const productRoutes = require('./routes/products.js')

//middleware
app.use(morgan('tiny'))
app.use(bodyParser.json())

//routes
app.get('/', (req, res) => {
    res.send('<a href = "/">Home</a><br><a href = "/api/users">Users<br></a><a href = "/api/products">Products</a>')
})

app.use('/api/users', usersRoutes)
app.use('/api/products', productRoutes)

//database
mongoose.connect('mongodb+srv://rajeshadhikari:GFkSZ9Sd9osbObyN@cluster0.iee82m5.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected to database')
    app.listen(port, () => {
        console.log(`Starting the server at port: ${port}`)
    })
})
.catch((error) => {
    console.log(error)
})