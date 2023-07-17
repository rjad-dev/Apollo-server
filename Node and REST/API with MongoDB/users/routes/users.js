const express = require('express')
const router = express.Router()

const {getUsers, createUser, searchUser, updateUser, deleteUser} = require('../controllers/users.js')

router.route('/').get(getUsers).post(createUser)
router.route('/:id').get(searchUser).put(updateUser).delete(deleteUser)

module.exports = router
