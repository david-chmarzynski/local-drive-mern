const router = require('express').Router();
const users = require('../routes/users.routes');
const shops = require('../routes/shops.routes');
const cities = require('../routes/cities.routes');

router.use('/users', users);
router.use('/shops', shops);
router.use('/cities', cities);

router.get('/', (req, res) => {
    res.json({
        message: "Projet MERN Local Drive"
    });
});

module.exports = router;