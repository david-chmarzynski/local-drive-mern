const { createProduct, findAllProducts, findProductByShopId, findProductById, deleteProductById } = require('../queries/admin.queries');
const path = require('path');
const multer = require('multer');
const upload = multer({ storage: multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../public'))
    },
    filename: (req, file, callback) => {
        callback(null, `${ Date.now() }-${ file.originalname }`);
    }
})});

exports.addProduct = async (req, res, next) => {
    const body = req.body;
    //console.log(req.file);
    try {
        const product = await createProduct(body);
        const createdProduct = await findProductById(product.id)
        //createdProduct.image = `/public/${ req.file.filename }`;
        const products = await findProductByShopId(body.shop_id);
        res.json({
            result: products
        })
    } catch (e) {
        console.log(e);
        res.json({e})
    }

}

exports.uploadImage = [
    upload.single('product-img'),
    async (req, res, next) => {
        try {
            // console.log('req.file :' + req.file);
            // const product = req.product;
            // product.img = `/images/products/${ req.file }`;
            // await product.save();
            res.json({
                message: "Photo enregistrée",
                path: `${req.protocol}://${req.get('host')}/admin/public/${req.file.filename}`
            })
        } catch (e) {
            console.log(e);
            next(e);
        }
    }
]


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

exports.deleteProduct = async (req, res, next) => {
    const body = req.body;
    console.log(body);
    try {
        const productId = body.productId;
        const shopId = body.shop_id;
        await deleteProductById(productId);
        const products = await findProductByShopId(shopId);
        res.json({
            result: products
        })
        
    } catch (e) {
        console.log(e);
        next(e);
    }
}

