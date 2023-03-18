const express = require("express");
const router = express.Router();
const {getProduct,getProductDetailById,createProduct,updateProduct,deleteProduct} = require("../controllers/productController");

router.route("/").get(getProduct).post(createProduct);
router.route("/:id").get(getProductDetailById).put(updateProduct).delete(deleteProduct);


module.exports= router;