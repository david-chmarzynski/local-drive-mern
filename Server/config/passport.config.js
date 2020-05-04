const { app } = require('../server');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { findUserById, findUserByMail } = require('../queries/users.queries');

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser( async (id, done) => {
    try {
        const user = await findUserById(id);
        done(null, user);
    } catch (e) {
       done(e); 
    }
});

passport.use('local', new LocalStrategy({
    usernameField: 'email'
}, async (email, password, done) => {
    try {
        const user = await findUserByMail(email);
        if (user) {
            const match = await user.comparePassword(password);
            if (match) {
                done(null, user);
            } else {
                done(null, false, { message: "Le nom d'utilisateur et/ou le mot de passe sont incorrects"})
            }
        } else {
            done(null, false, { message: "Le nom d'utilisateur et/ou le mot de passe sont incorrects"})
        }
    } catch (e) {
        done(e);
    }
}))