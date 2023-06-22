var express = require("express");
var router = express.Router();
const controller = require("../../controllers/web/users-web-controller");
const { requireAuth } = require("../../utils/passport");

/* GET home page. */
router.get("/:username", requireAuth, controller.home);



module.exports = router;
