const router = require('express').Router();
const users = require('../routes/users.routes');
const shops = require('../routes/shops.routes');
const cities = require('../routes/cities.routes');
const admin = require('../routes/admin.routes');

router.use('/users', users);
router.use('/shops', shops);
router.use('/cities', cities);
router.use('/admin', admin);

router.get('/', (req, res) => {
    res.json({
        message: "Projet MERN Local Drive"
    });
});

module.exports = router;