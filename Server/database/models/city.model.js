const mongoose = require('mongoose');
const schema = mongoose.Schema;

const citySchema = schema({
    local: {
        name: { type: String, required: true },
        zip: { type: String, required: true },
        shops_id: { type: schema.Types.ObjectId, ref: 'shops', required: false }
    }
});

const City = mongoose.model('cities', citySchema);

module.exports = City;