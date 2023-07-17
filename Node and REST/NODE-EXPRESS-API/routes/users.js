const express = require('express')
const router = express.Router()
const {v4: uuidv4} = require('uuid')
let users =[]

router.get('/', (req, res) => {
    res.send(users)
})

router.post('/', (req, res) => {
    const user = req.body

    const userID =  uuidv4() 
    const userwithID = { ...user, id : userID}

    users.push(userwithID)

    console.log(`${user.firstName} ${user.lastName} added to the database`)
    res.send(`${user.firstName} ${user.lastName} added to the database`)
})

router.get('/:id', (req, res) => {
    const {id} = req.params

    const singleUsers = users.find((user) => user.id === id)

    if(!singleUsers){
        return res.send('User does not exists')
    }

    res.send(singleUsers)
})

router.delete('/:id', (req, res) => {
    const {id} = req.params
    users = users.filter((user) => user.id !== id);

    res.send(`user with the user id ${id} is deleted from the database`)
})

module.exports = router