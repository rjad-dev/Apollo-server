const express = require('express')
const app = express()

const logger = require('./logger')

const authorize = require('./authorize')

//req ----> middleware ----> response

app.use(authorize) //returns methods url and time for the page URL beginning with /api 

app.get('/', (req, res) => {
    res.status(202).send('<h1>Home</h1>')
})

app.get('/about', (req, res) => {    
    res.status(202).send('<h1>About</h1>')
})

app.get('/api/products', (req, res) => {    
    res.status(202).send('<h1>Products</h1>')
})

app.get('/api/items', [logger, authorize],(req, res) => {   
    console.log(req.user ) 
    res.status(202).send('<h1>Items</h1>')
})

app.all('*', (req, res) => {
    res.status(404).send('404 page not found')
})

app.listen(4000, (req, res) => {
    console.log('Listening to port 4000')
})