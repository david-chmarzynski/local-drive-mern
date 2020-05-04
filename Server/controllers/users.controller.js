const { createUser, findUserByMail } = require('../queries/users.queries');
const passport = require('passport');

exports.register = async (req, res, next) => {
    const body = req.body;
    try {
        const createdUser = await findUserByMail(req.body.email);
        if (createdUser) {
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