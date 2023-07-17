const userModel = require('../models/userModel.js')
//view all users
const getUsers = async(req, res) => {
    try{    
        const user = await userModel.find({})

        if(!user.length){
            return res.status(400).json({Message: 'No users on database'})
        }

        res.status(200).json(user)
    }
    catch(error){
        console.log(error.Message)
        res.status(500).send(error.Message)
    }
}
//create a new user
const createUser = async(req, res) => {
    try{    
        let user = await userModel.create(req.body)
        res.status(200).json(user)
    }
    catch(error){
        console.log(error.Message)
        res.status(500).send(error.Message)
    }
}
//search a user by ID
const searchUser = async(req, res) => {
    try{   
        const {id} = req.params 
        const user = await userModel.findById(id)
        res.status(200).json(user)
    }
    catch(error){
        console.log(error.Message)
        res.status(500).send(error.Message)
    }
}
//delete a user by ID
const deleteUser = async(req, res) => {
    try{
        const {id} = req.params
        const user = await userModel.findByIdAndDelete(id, req.body)
        res.status(200).json(user)
    }
    catch(error){
        console.log(error.Message)
        res.status(500).send(error.Message)
    }
}
//Update a user by ID
const updateUser = async(req, res) => {
    try{
        const {id} = req.params
        const user = await userModel.findByIdAndUpdate(id, req.body)
        res.status(200).json(user)
    }
    catch(error){
        console.log(error.Message)
        res.status(500).send(error.Message)
    }
}

module.exports = {
    getUsers, searchUser, createUser, updateUser, deleteUser
}
