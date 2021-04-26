const express = require('express');
const router = express.Router();

const { addProduct, getAllProducts, updateProduct, getProductById, deleteProductById } = require('../controller/product.controller');

router.get('/allProducts', getAllProducts);
router.get('/retrieveProductById/:id', getProductById);
router.post('/addProduct', addProduct);
router.put('/updateProduct', updateProduct);
router.delete('/deleteProduct/:id', deleteProductById);

module.exports = router;
