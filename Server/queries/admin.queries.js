const Product = require('../database/models/product.model');

exports.createProduct = async (product) => {
    console.log(product)
    try {
        const newProduct = new Product({
            name: product.name,
            description: product.description,
            price: product.price,
            image: product.image,
            unit: product.unit,
            stock: product.stock,
            shop_id: product.shop_id,
        })
        return newProduct.save();
    } catch (e) {
        throw e;
    }
}

exports.findAllProducts = () => {
    return Product.find().exec;
};

exports.findProductByName = (name) => {
    return Product.find({"name": {$regex: name, $options: /[a-zA-Z]/}}).exec();
};

exports.findProductByShopId = (shopId) => {
    console.log(shopId);
    return Product.find({ shop_id: shopId});
};