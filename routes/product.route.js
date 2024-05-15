const express = require('express');
const router = express.Router();
const {getProducts, getOneProduct, updateProduct, deleteProduct, createProduct} = require('../controllers/product.controller.js')

router.get('/', getProducts)

router.get('/:id', getOneProduct)

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)

router.post('/', createProduct)


module.exports = router