const taskModel = require('../models/task.js')

const asyncWrapper = require('../middleware/async.js')

const getTasks = asyncWrapper (async (req, res) => {
    const tasks = await taskModel.find({})
    if(!tasks.length){
        return res.status(404).json({Message: 'No tasks available at the database'})
    }
    res.status(200).json({tasks})
})

const createTask = asyncWrapper(async (req, res) => {
    let task = await taskModel.create(req.body)
    res.status(201).json({task})

})

const getTask = asyncWrapper(async (req, res) => {
    const {id} = req.params
    const task = await taskModel.findById(id)
    if(!task){
        return res.status(404).json({Message:`No task with the ID ${id} exists`})
    }
    res.status(200).json({task})
})

const updateTask = asyncWrapper(async (req, res) => {
    const {id} = req.params
    const task = await taskModel.findByIdAndUpdate(id, req.body)
    if(!task){
        return res.status(404).json({Message:`No task with the ID:${id} found on database`})
    }
    res.status(201).send(`Task: ${task.taskName} is updated`)
})

const deleteTask = asyncWrapper(async (req, res) => {
    const {id} = req.params
    const task = await taskModel.findByIdAndDelete(id, req.body)
    if(!task){
        return res.status(404).json({Message:`No task with the ID:${id} found on database`})
    }
    res.status(201).send(`Task: '${task.taskName}' is removed`)
})

const deleteCompletedTask = asyncWrapper(async(req, res) => {
    const searchTask = await taskModel.find({})
    {
        const id = searchTask.id
        const status = searchTask.completed
        if(status === true){
            const task = taskModel.findByIdAndDelete(id, req.body)
            return res.status(201).send(`Task: '${task.taskName}' is removed`)
        }
    }
})
module.exports = {
    getTasks, createTask, getTask, updateTask, deleteTask, deleteCompletedTask
}