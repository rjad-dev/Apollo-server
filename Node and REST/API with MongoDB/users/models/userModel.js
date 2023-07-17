const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required: [true, "You are required to fill up this field"]
    },
    lastName: {
        type: String,
        required: [true, "You are required to fill up this field"]
    },
    age:{
        type:Number,
        required:false
    }
})

const user = mongoose.model('user', userSchema)
module.exports = user