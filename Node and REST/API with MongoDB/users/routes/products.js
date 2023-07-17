const express = require('express')
const router = express.Router()

const {getProducts, createProduct, searchProduct, deleteProduct, updateProduct} = require('../controllers/products.js')

router.route('/').get(getProducts).post(createProduct)
router.route('/:id').get(searchProduct).delete(deleteProduct).put(updateProduct)

module.exports = router

