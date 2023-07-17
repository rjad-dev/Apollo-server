const express = require('express')

const {products} = require('./data')
const app = express()

app.get('/', (req, res) => {
    res.json(products)
})

app.listen(5000, () => {
    console.log('Listening to port 3000')
})