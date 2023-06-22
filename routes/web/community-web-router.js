var express = require("express");
var router = express.Router();
const controller = require("../../controllers/web/community-web-controller");
const { requireAuth } = require("../../utils/passport");

/* GET home page. */
router.get("/", requireAuth, controller.home);



module.exports = router;
