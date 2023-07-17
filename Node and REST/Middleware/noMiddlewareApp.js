const express = require('express')
const app = express()

//req ----> middleware ----> response

app.get('/', (req, res) => {

    const method =  req.method;
    const url = req.url;
    const time = new Date().getFullYear()

    console.log(method, url, time)
    res.status(202).send('<h1>Home</h1>')
})

app.get('/about', (req, res) => {
    const method =  req.method;
    const url = req.url;
    const time = new Date().getFullYear()

    console.log(method, url, time)
    
    res.status(202).send('<h1>About</h1>')
})

app.all('*', (req, res) => {
    res.status(404).send('404 page not found')
})

app.listen(4000, (req, res) => {
    console.log('Listening to port 4000')
})