const express = require("express");
const router = express.Router();
const controller = require("../../controllers/web/login-web-controller");
const { passport } = require("../../utils/passport");

router.get("/", controller.home);

router.post('/', passport.authenticate('local', {
    failureRedirect: "/login",
    failureFlash: { type: "danger", message: "Incorrect user credentials" }
}), controller.loginUser);

router.post("/register", controller.registerUser);

module.exports = router;
