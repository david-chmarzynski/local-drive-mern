const { createProduct, findAllProducts, findProductByShopId } = require('../queries/admin.queries');

exports.addProduct = async (req, res, next) => {
    const body = req.body;
    try {
        const product = await createProduct(body);
        res.json({
            message: "Nouveau produit créé"
        })
    } catch (e) {
        res.json({e})
    }

}

exports.getAllProducts = async (req, res, next) => {
    try {
        const products = await findAllProducts();
        res.json({
            result: products
        });
    } catch (e) {
        res.json({
            error: e
        })
    }

}

exports.getProductsByShop = async (req, res, next) => {
    const body = req.body;
    try {
        const shopId = body.shop_id;
        const products = await findProductByShopId(shopId);
        console.log(products);
        res.json({
            result: products
        });
    } catch (error) {
        res.json({
            error: error
        });
    }
}