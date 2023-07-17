const productModel = require('../models/productModel.js')

//create a new product
const createProduct = async(req, res) => {
    try{
        let product = await productModel.create(req.body)
        res.status(200).json(product)
    }
    catch(error){
        console.log(error.message)
        res.status(500).json({Message: error.message})
    }
}

//view available products
const getProducts = async(req, res) => {
    try{
        const product = await productModel.find({});
        res.json(product)
    }
    catch(error){
        res.status(500).json({Message: error.message})
    }
}

//search for a product by an ID
const searchProduct = async(req, res) => {
    try{
        const {id} = req.params
        const product = await productModel.findById(id);
        res.json(product)
    }
    catch(error){
        res.status(500).json({Message: 'Product that you searched for is not available'})
    }
}

//update products
const updateProduct = async(req, res) => {
    try{
        const {id} = req.params
        const product = await productModel.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({Message:`No product in database with an ID: ${id}`})
        }
        res.json(product)
    }
    catch(error){
        console.log(error.message)
        res.status(500).json({Message: error.message})
    }
}

//delete Products
const deleteProduct = async(req, res) => {
    try{
        const {id} = req.params
        const product = await productModel.findByIdAndDelete(id, req.body);
        if(!product){
            return res.status(404).json({Message:`No product in database with an ID: ${id}`})
        }
        res.json(product)
    }
    catch(error){
        console.log(error.message)
        res.status(500).json({Message: error.message})
    }
}

module.exports = {
    getProducts, 
    searchProduct, 
    createProduct, 
    updateProduct, 
    deleteProduct
}