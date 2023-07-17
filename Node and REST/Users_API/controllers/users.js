const {v4: uuidv4} = require('uuid')
let users = []

const createUser = (req, res) => {
    const user = req.body
    const userID = uuidv4()
    const userwithID = {...user, id:userID}

    users.push(userwithID)

    res.send(`${user.firstName} ${user.lastName} added to the database`)
}

const getUsers = (req, res) => {
    if(!users.length){
        return res.send(`${users.length} users on database`)
    }
    res.send(users)
}

const searchUser = (req, res) => {
    const {id} = req.params
    const singleUser = users.find((user) => user.id === id)
    if(!singleUser){
        res.json({sucess: true, data:[], message: `No user exist with user ID ${id}`})
    }
    res.json({sucess:true, data:singleUser})
}

const deleteUser = (req, res) => {
    const {id} = req.params
    users = users.filter((user) => user.id !== id)
    res.send(`User with user ID: ${id} is removed from the database`)
}

const updateUser = (req, res) => {
    const {id} = req.params
    const {firstName, lastName} = req.body
    const user = users.find((user) => user.id === id)
    if(firstName) user.firstName = firstName  

    if(lastName) user.lastName = lastName

    res.send(`user with user id ${id} updated sucessfully`)
}

module.exports = {createUser, getUsers, searchUser, deleteUser, updateUser}