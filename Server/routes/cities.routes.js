const router = require('express').Router();
const { search, createCity } = require('../controllers/cities.controller');

router.post('/search', search);
router.post('/create', createCity);

module.exports = router;