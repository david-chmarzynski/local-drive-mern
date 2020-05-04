const router = require('express').Router();
const { register, signin, logout } = require('../controllers/users.controller');

router.post('/register', register);
router.post('/signin', signin);
router.get('/logout', logout);

module.exports = router;