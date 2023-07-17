const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    taskName:{
        type : String,
        required: [true, 'Please add a task'],
        trim:true,
        maxlength: [20, 'Task cannot be longer than 20 characters']
    },
    completed:{
        type:Boolean,
        default:false,
    },
    Date:{
        type:Date,
        default:Date.now
    }
})

const task = mongoose.model('task', taskSchema)

module.exports = task