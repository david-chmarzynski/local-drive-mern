const router = require('express').Router();
const { addProduct, getAllProducts } = require('../controllers/admin.controller');

router.post('/add/product', addProduct)
router.get('/list/products', getAllProducts)

module.exports = router;