const { createProduct, findAllProducts } = require('../queries/admin.queries');

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