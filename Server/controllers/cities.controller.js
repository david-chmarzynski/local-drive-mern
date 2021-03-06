const { createCity, findCityByName } = require('../queries/cities.queries');
const passport = require('passport');

exports.search = async (req, res, next) => {
    const body = req.body;
    console.log(body.name)
    try {
        const search = await findCityByName(body.name);
        res.json({
            result: search
        });
    } catch (e) {
        res.json({ errors: [e.message] })
    }
}

exports.createCity = async (req, res, next) => {
    const body = req.body;
    try {
        const newCity = await createCity(body);
        res.json({
            message: "Nouvelle ville créée"
        })
    } catch (e) {
        res.json({e})
    }
}
