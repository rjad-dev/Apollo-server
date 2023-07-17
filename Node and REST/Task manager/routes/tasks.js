const express = require('express')
const router = express.Router()
const {
    getTasks, 
    createTask, 
    deleteTask, 
    getTask, 
    updateTask,
    deleteCompletedTask
} = require('../controllers/tasks.js')

router.route('/').get(getTasks).post(createTask)
router.route('/:id').patch(updateTask).get(getTask).delete(deleteTask)
router.route('/').delete(deleteCompletedTask)
module.exports = router