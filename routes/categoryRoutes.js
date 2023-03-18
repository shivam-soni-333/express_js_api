const express = require("express");
const router = express.Router();
const {getAllCategory,createCategory,getSpecifiedCategory,updateCategory,deleteCategory} = require("../controllers/categoryController")

router.route("/").get(getAllCategory).post(createCategory);
router.route("/:id").get(getSpecifiedCategory).put(updateCategory).delete(deleteCategory);

module.exports = router;