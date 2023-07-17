const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')

const bodyParser = require('body-parser')
const taskRoutes = require('./routes/tasks.js')
const notFound = require('./middleware/not-found.js')
const errorHandlerMiddleware = require('./middleware/errorHandler.js')


const app = express()
const port = 5000

//Middleware
app.use(morgan('tiny'))
app.use(bodyParser.json())

// app.use(express.static('./public'))

//routes
app.get('/', (req, res) => {
    res.send('<h1>Task Manager App</h1><h3><a href =/api/tasks>MyTasks</a><h3>')
})
app.use('/api/tasks', taskRoutes)

app.use(notFound)
app.use(errorHandlerMiddleware)

//database
const dbURI = 'mongodb+srv://rajeshadhikari:GFkSZ9Sd9osbObyN@cluster0.iee82m5.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority'
mongoose
    .connect(dbURI)
    .then(() => {
        console.log('Connected to the database')
        app.listen(port, () => {
            console.log(`Listening to the server at the port: ${port}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })