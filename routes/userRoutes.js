const express = require("express");
const router  = express.Router();

const {register,login,get_current_user} = require("../controllers/userController");
const validateToken = require("../middleware/validatetoken");

router.post("/me",validateToken,get_current_user);
router.route("/login").post(login);
router.route("/register").post(register);
module.exports = router; 