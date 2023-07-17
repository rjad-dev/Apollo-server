const express = require('express')
const router = express.Router()
const {getStudents, createStudent, searchStudent, deleteStudent, updateStudent} = require('../controllers/students.js')

router.get('/', getStudents)
router.post('/', createStudent)
router.get('/:id', searchStudent)
router.delete('/:id', deleteStudent)
router.patch('/:id', updateStudent)

module.exports = router