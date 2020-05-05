const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const shopSchema = schema({
    local: {
        email: { type: String, required: true },
        password: { type: String, required: true },
        isShop: { type: Number, required: false }
    }
});

shopSchema.statics.hashPassword = (password) => {
    return bcrypt.hash(password, 12);
};

shopSchema.methods.comparePassword = function(password) {
    return bcrypt.compare(password, this.local.password)
};

const Shop = mongoose.model('shops', shopSchema);

module.exports = Shop;