const router = require('express').Router();
const users = require('../routes/users.routes');
const shops = require('../routes/shops.routes');
const cities = require('../routes/cities.routes');
const admin = require('../routes/admin.routes');
const path = require('path');

router.use('/users', users);
router.use('/shops', shops);
router.use('/cities', cities);
router.use('/admin', admin);
router.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client-build/dist/index.html'))
});


module.exports = router;