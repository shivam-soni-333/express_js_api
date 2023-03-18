const express = require("express");
const validateToken = require("../middleware/validatetoken");

const router = express.Router();
const {getProduct,getProductDetailById,createProduct,updateProduct,deleteProduct} = require("../controllers/productController");

router.route("/").get(getProduct).post(createProduct);
router.route("/:id").get(validateToken, getProductDetailById).put(validateToken,updateProduct).delete(validateToken,deleteProduct);


module.exports= router;