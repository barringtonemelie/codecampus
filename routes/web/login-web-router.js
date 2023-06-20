const express = require("express");
const router = express.Router();
const controller = require("../../controllers/web/login-web-controller");

router.get("/", controller.home);

router.post("/register", controller.registerUser);

module.exports = router;
