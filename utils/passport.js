const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/mysql/user-model");

passport.use(new LocalStrategy(
    async (username, password, done) => {
        const user = await User.findOne({ where: { username } });

        if (!user) {
            return done(null, false, { message: "Incorrect user credentials" });
            
        }

        const passwordMatch = await user.verifyPassword(password);

        if (!passwordMatch) {
            return done(null, false, { message: "Incorrect user credentials" });
        }

        return done(null, user);
    }
));

passport.serializeUser((user, done) => { 
    done(null, user.userId);
});

passport.deserializeUser(async (userId, done) => { 
    const user = await User.findOne({where: {userId}});
    done(null, user);
});

const requireAuth = (req, res, next) => { 
    if (req.isAuthenticated()) {
        return next();
    }

    req.session.flash = { type: "danger", message: "Please login to view this page" }; 

    res.redirect("/login");
};

const setUser = (req, res, next) => { 
    if (req.isAuthenticated()) {
        res.locals.user = req.user.dataValues;
    }
    next();
};

module.exports = {
    passport,
    requireAuth,
    setUser
};