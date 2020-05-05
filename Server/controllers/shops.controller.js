const { createShop, findShopByMail } = require('../queries/shops.queries');
const passport = require('passport');

exports.register = async (req, res, next) => {
    const body = req.body;
    try {
        const createdShop = await findShopByMail(req.body.email);
        if (createdShop) {
            return res.status(400).json({
                message: "Un magasin utilise déjà cet email",
                shop: createdShop
            });
        } else {
            const shop = await createShop(body);
            res.json({
                message: "Magasin créé"
            });
        }
    } catch (e) {
        res.json({ errors: [e.message] })
    }
}