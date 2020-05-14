const Product = require('../database/models/product.model');

exports.createProduct = async (product) => {
    try {
        const newProduct = new Product({
            image: product.image,
            name: product.name,
            description: product.description,
            price: product.price,
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
    return Product.find({ shop_id: shopId}).exec();
};

exports.findProductById = (productId) => {
    return Product.findById(productId).exec();
};

exports.deleteProductById = (productId) => {
    return Product.findByIdAndDelete(productId).exec();
}