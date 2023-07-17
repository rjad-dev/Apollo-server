const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5000

const usersRoutes = require('./routes/users.js')

app.use(bodyParser.json());
app.use('/users', usersRoutes)

app.get('/', (req, res) => {    
    res.send('Home')
})

app.listen(port, () => {
    console.log(`Server running on port: http://localhost:${port}`)
})