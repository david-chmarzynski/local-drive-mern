const router = require('express').Router();
const { addProduct, getAllProducts, getProductsByShop } = require('../controllers/admin.controller');

router.post('/add/product', addProduct);
router.get('/list/products', getAllProducts);
router.post('/shop/products', getProductsByShop);

module.exports = router;