const express = require('express')
const router =  express.Router()

const { getProducts, searchProduct, createProduct, updateProduct, deleteProduct }  = require('../controllers/products.js')

router.route('/').get(getProducts).post(createProduct)
router.route('/:id').get(searchProduct).put(updateProduct).delete(deleteProduct)

module.exports = router


