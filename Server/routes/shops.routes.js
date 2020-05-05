const router = require('express').Router();
const { register } = require('../controllers/shops.controller');

router.post('/register', register);

module.exports = router;