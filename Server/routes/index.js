const router = require('express').Router();
const users = require('../routes/users.routes');

router.use('/users', users);

router.get('/', (req, res) => {
    res.json({
        message: "Projet MERN Local Drive"
    });
});

module.exports = router;