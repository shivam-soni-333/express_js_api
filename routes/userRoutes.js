const express = require("express");
const router  = express.Router();
const {register,login,get_current_user} = require("../controllers/userController");

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/me").post(get_current_user);
module.exports = router;