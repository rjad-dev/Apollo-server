const express = require('express')
const router = express.Router()
const {createUser, getUsers, searchUser, updateUser, deleteUser} = require('../controllers/users.js')

router.get('/', getUsers)

router.post('/', createUser)

router.get('/:id', searchUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

module.exports = router