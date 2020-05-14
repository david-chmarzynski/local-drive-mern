const { findUserById } = require('../queries/users.queries');
const passport = require('passport');
const { findShopByMail } = require('../queries/panier.queries');

exports.createPanier = async (req, res, next) => {
    const body = req.body;
    try {
        const currentUser = await findUserById(req.body.currentUserId);
        const createdPanier = await findPanierByUserId(req.body.currentUserId);
        if (createdUser && createdPanier) {
            return res.status(400).json({
                panier: createdPanier
            });
        } else {
            const panier = await createPanier(body);
            res.json({
                message: "Panier créé",
                panier
            });
        }
    } catch (e) {
        res.json({ errors: [e.message] })
    }
}
