const router = require('express').Router();
const { search, createCity } = require('../controllers/cities.controller');

router.get('/search', search);
router.post('/create', createCity);

module.exports = router;