const express = require('express')
const path = require('path')

const app = express()


//setup statics and middleware
app.use(express.static('./navbar-app'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res) => {
    res.status(404).send('Page not found')
})

app.listen(5000, () => {
    console.log('Listening to port 5000......')
})