const express = require('express')
const app = express()
const port = 5000
const productsRoutes = require('./routes/products')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//middleware
app.use(bodyParser.json())


//routes
app.get('/', (req, res) => {
    res.send('<a href=/>Home</a> <a href = /products >products</a>')
})

app.use('/products', productsRoutes)

//database
mongoose.connect('mongodb+srv://rajeshadhikari:qTTRnRvgUalycfE2@cluster0.xam6i28.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected to mongoDB')
        app.listen(port, ()=> {
            console.log(`Starting server at port: http://localhost:${port}`)
        })
    })
    .catch(() => {
        console.log('error')
    })

