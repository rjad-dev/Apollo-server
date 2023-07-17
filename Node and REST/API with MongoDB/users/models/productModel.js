const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productName:{
        type: String,
        required: [true, 'You are required to fill up this field']
    },
    price:{
        type: Number,
        required: [true, 'You are required to fill up this field']
    },
    brand:{
        type: String,
        required: false
    }
})

const product  = mongoose.model('product', productSchema)
module.exports = product