const { createUser, findUserByMail, findUserById, updatePanier } = require('../queries/users.queries');
const passport = require('passport');
const { findShopByMail } = require('../queries/shops.queries');

exports.register = async (req, res, next) => {
    const body = req.body;
    try {
        const createdUser = await findUserByMail(req.body.email);
        const createdShop = await findShopByMail(req.body.email);
        if (createdUser || createdShop) {
            return res.status(400).json({
                message: "Un utilisateur utilise déjà cet email",
                user: createdUser
            });
        } else {
            const user = await createUser(body);
            res.json({
                message: "Utilisateur créé"
            });
        }
    } catch (e) {
        res.json({ errors: [e.message] })
    }
}

exports.signin = async (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            next(err);
        } else if (!user) {
            return res.status(400).json({
                errors: [info.message], isAuthenticated: req.isAuthenticated(), currentUser: req.user
            });
        } else {
            req.login(user, (err) => {
                console.log(user);
                res.json({
                    isAuthenticated: req.isAuthenticated(),
                    currentUser: req.user,
                    message: 'Félicitation, la connexion a réussie'
                });
            })
        }
    })(req, res, next);
}

exports.logout = async (req, res, next) => {
    req.logout();
    res.json({
        isAuthenticated: req.isAuthenticated()
    })
}

exports.updatePanier = async (req, res, next) => {
    const body = req.body;
    try {
        const currentUser = await findUserById(body.user_id);
        if (currentUser) {
            updatePanier(body.products);
            res.json({
                message: "Panier mis à jour"
            })
        } else {
            res.json({
                message: "Vous n'êtes pas connecté" // Temporaire, prochainement : ajout au panier possible, demande de connexion à la validation du panier ?
            })
        }
    } catch (e) {
        next(e);
    }
}