const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()

const port = 5000

app.use(morgan('tiny'))
app.use(bodyParser.json())

app.use('/api/users', usersRoutes)

app.get('/', (req, res) => {
    res.send('<h1>Home</h1><a href = "api/users">Users</a>')
})

app.listen(port, () => {
    console.log(`Server running on the port http://localhost:${port}`)
})