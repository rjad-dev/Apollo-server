const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const studentsRoutes = require('./routes/students')
const port = 5000
const app = express()

app.use(morgan('tiny'))
app.use(bodyParser.json())

app.use('/api/students', studentsRoutes)

app.get('/', (req, res) => {
    res.status(200).send('<h1>Home Page</h1><a href = "api/students">Students</a>')
})

app.listen(port, () => {
    console.log(`Starting server at the port http://localhost: ${port}`)
})