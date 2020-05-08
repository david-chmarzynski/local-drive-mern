const User = require('../database/models/user.model');

exports.createUser = async (user) => {
    console.log(user);
    try {
        const hashedPassword = await User.hashPassword(user.password);
        const newUser = new User({
            local: {
                email: user.email,
                password: hashedPassword,
                isShop: user.isShop
            }
        })
        return newUser.save();
    } catch (e) {
        throw e;
    }
}

exports.findUserById = (id) => {
    return User.findById(id).exec();
};

exports.findUserByMail = (email) => {
    return User.findOne({ 'local.email': email }).exec();
};