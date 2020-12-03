const { app } = require('../server');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { findUserById, findUserByMail } = require('../queries/users.queries');
const { findShopByMail, findShopById } = require('../queries/shops.queries');

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser( async (id, done) => {
    try {
        const user = await findUserById(id);
        const shop = await findShopById(id);
        console.log(user, shop, 'iiiiiicc')
        if(!user) {
          console.log("C'est bien ici", shop)
          done(null, shop)
        } else {
          //console.log(user)
          done(null, user);
        }
    } catch (e) {
       done(e, null); 
    }
});

passport.use('local', new LocalStrategy({
    usernameField: 'email'
}, async (email, password, done) => {
    try {
        const user = await findUserByMail(email);
        const shop = await findShopByMail(email);
        if (user) {
            const match = await user.comparePassword(password);
            if (match) {
                done(null, user);
            } else {
                done(null, false, { message: "Le nom d'utilisateur et/ou le mot de passe sont incorrects"});
            }
        } else if (shop) {
            const match = await shop.compareShopPassword(password);
            if (match) {
                done(null, shop);
            } else {
                done(null, false, { message: "Le nom d'utilisateur et/ou le mot de passe sont incorrects"});
            }
        } else {
            done(null, false, { message: "Le nom d'utilisateur et/ou le mot de passe sont incorrects"})
        }
    } catch (e) {
        done(e);
    }
}))