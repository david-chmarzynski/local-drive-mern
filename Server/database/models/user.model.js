const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = schema({
    local: {
        email: { type: String, required: true },
        password: { type: String, required: true },
        isShop: { type: Boolean, required: true }
    },
    panier: {
        products: [
            { product: { type: Object, required: false }}
        ],
        isValidate: { type: Boolean, default: false }
    }
});

userSchema.statics.hashPassword = (password) => {
    return bcrypt.hash(password, 12);
};

userSchema.methods.comparePassword = function(password) {
    return bcrypt.compare(password, this.local.password)
};

const User = mongoose.model('users', userSchema);

module.exports = User;