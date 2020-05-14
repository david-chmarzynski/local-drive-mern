const router = require('express').Router();
const path = require('path');
const express = require('express');
const { addProduct, getAllProducts, getProductsByShop, uploadImage, deleteProduct } = require('../controllers/admin.controller');

router.get('/public/', express.static(path.join(__dirname, 'public')));
router.post('/add/product', addProduct);
router.get('/list/products', getAllProducts);
router.post('/shop/products', getProductsByShop);
router.delete('/delete', deleteProduct),
router.post('/upload/image', uploadImage);



module.exports = router;