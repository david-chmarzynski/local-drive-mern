const router = require('express').Router();
const { getPanier } = require('../controllers/panier.controller');

router.get('/list/panier', getPanier);

module.exports = router;