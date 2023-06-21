const User = require("../../models/mysql/user-model");
const bcrypt = require("bcrypt");

module.exports = {
    home: async (req, res) => {
        if (req.user) {
            return res.redirect("/profile");
        }
        res.render("login/home", { title: "Login/Register" });
    },
    registerUser: async (req, res) => {
        const { username, password, confirmPassword } = req.body;
        console.log({ password, confirmPassword });
        const userExists = await User.findOne({  where: {username }});

        if (userExists) {
            req.session.flash = { type: "danger", message: "User already exists" }
            return res.redirect('/login');
        }

        if (password !== confirmPassword) {
            console.log("Passwords do not match");
            req.session.flash = { type: "danger", message: "Passwords do not match"};
            return res.redirect('/login');
        } else {

            const passwordHash = await bcrypt.hash(password, 10);
            
            const user = await User.create({ username, passwordHash });
    
            if (user) {
                req.session.flash = { type: "success", message: "User created" }
            }
    
            res.redirect('/login');
        }

       
    },
    loginUser: async (req, res) => { 
        req.session.flash = { type: "success", message: "You are now logged in" }

        res.redirect("/profile");
    }
};
 