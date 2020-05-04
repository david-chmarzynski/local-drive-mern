const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        message: "Projet MERN Local Drive"
    });
});

module.exports = router;