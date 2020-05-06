const City = require('../database/models/city.model');

exports.createCity = async (city) => {
    try {
        const newCity = new City({
            local: {
                name: city.name,
                zip: city.zip,
            }
        })
        return newCity.save();
    } catch (e) {
        throw e;
    }
}

exports.findCityById = (id) => {
    return City.findById(id).exec();
};

exports.findCityByName = (name) => {
    console.log(name);
    return City.find({"local.name": {$regex: name, $options: /[a-zA-Z]/}}).exec();
};