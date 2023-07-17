const express = require('express')
const app = express()

let {people} =require('./data')

const morgan = require('morgan')
app.use(morgan('tiny'))

app.use(express.static('./methods-public'))

app.get('/api/people', (req, res) => {
    res.status(200).json({success:true, data:people})
})


app.listen(5000, () => {
    console.log('Listening to port 5000.....')
})