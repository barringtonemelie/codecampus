const User = require("../../models/mysql/user-model");


module.exports = {
    home: async (req, res) => {
        res.render("login/home", { title: "Login/Register" });
    },
    registerUser: async (req, res) => {
        const username = req.body.username;
        const userExists = await User.findOne({  where: {username }});

        if (userExists !== null) {
            res.redirect('/login');
        }

        req.flash('info', 'New flash message added');

        User.create({
        username: "Emelie",
        passwordHash: "INVALID_HASH",
        });
    },
};
