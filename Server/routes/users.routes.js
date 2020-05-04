const router = require('express').Router();
const { register, signin } = require('../controllers/users.controller');

router.post('/register', register);
router.post('/signin', signin);

module.exports = router;