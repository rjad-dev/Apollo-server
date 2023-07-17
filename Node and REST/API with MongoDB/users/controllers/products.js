const productModel = require('../models/productModel.js')
//view all available products 
const getProducts = async (req, res) => {
    try{
        const product = await productModel.find({})
        if(!product.length){
            res.status(404).json({Message: 'No products available on database'})
        }
        res.status(200).json(product)
    }
    catch(error){
        console.log(error)
        res.status(500).json({Message: error.Message})
    }
}
//create a new product
const createProduct = async (req, res) => {
    try{
        let product = await productModel.create(req.body)
        res.status(200).json(product)
    }
    catch(error){
        console.log(error)
        res.status(500).json({Message: error.Message})
    }
}
//search product by ID
const searchProduct = async(req, res) => {
    try{
        const {id} = req.params
        const product = await productModel.findById(id)
        if(!product){
            res.status(404).json({Message: `No product available of the product ID: ${id}`})
        }

        res.status(200).json(product)
    }
    catch(error){
        console.log(error)
        res.status(500).json({Message: error.Message})
    }
}
//delete product by ID
const deleteProduct = async(req, res) => {
    try{
        const {id} = req.params
        const product = await productModel.findByIdAndDelete(id, req.body)
        if(!product){
            res.status(404).json({Message: `No product available of the product ID: ${id}`})
        }
        res.status(200).json(product)
    }
    catch(error){
        console.log(error)
        res.status(500).json({Message: error.Message})
    }
}
//update product by ID
const updateProduct = async(req, res) => {
    try{
        const {id} = req.params
        const product = await productModel.findByIdAndUpdate(id, req.body)
        if(!product){
            res.status(404).json({Message: `No product available of the product ID: ${id}`})
        }
        res.status(200).json(product)
    }
    catch(error){
        console.log(error)
        res.status(500).json({Message: error.Message})
    }
}
module.exports = { 
    getProducts, createProduct, searchProduct, updateProduct, deleteProduct
}