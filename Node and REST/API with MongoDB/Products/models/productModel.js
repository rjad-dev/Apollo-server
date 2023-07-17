const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name: {
            type:String,
            required:[true, "please enter the product name"]
        },
        quantity: {
            type: Number,
            required:[true, "please enter the quantity"],
            default: 0
        },
        price:{
            type: Number,
            required: [true, "please enter the price"]
        },
        image:{
            type: String,
            required: false
        }
    }
)

const product = mongoose.model('product', productSchema)

module.exports = product