const Shop = require('../database/models/shop.model');

exports.createShop = async (shop) => {
    console.log(shop);
    try {
        const hashedPassword = await Shop.hashPassword(shop.password);
        const newShop = new Shop({
            local: {
                email: shop.email,
                password: hashedPassword,
                isShop: shop.isShop
            }
        })
        if (shop.isShop === true) {
            return newShop.save();
        }
    } catch (e) {
        throw e;
    }
}

exports.findShopById = (id) => {
    return Shop.findById(id).exec();
};

exports.findShopByMail = (email) => {
    return Shop.findOne({ 'local.email': email }).exec();
};