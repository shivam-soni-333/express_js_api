const asynchandler = require("express-async-handler");
const Product = require("../models/productModel");

//@desc product controller fetch all product 
//@route GET /products
//@access public 
const getProduct = asynchandler(async(req,res)=>{
    const products =await Product.find();
    res.status(200).json({success:1,error:0,data:products});
});

//@desc get specific product detail
//@route GET /products/1
//@access public 
const getProductDetailById =asynchandler(async(req,res)=>{
    const product = await Product.findById(req.params.id);
    if(!product){
        res.status(404);
        throw new Error("Product Not Found");
    }
    res.status(200).json({success:1,error:0,data:product});
});



//@desc create product
//@route POST /products
//@access public 
const createProduct = asynchandler(async(req,res,errorHandler)=>{
    const{name,price} = req.body;
    if(!name || !price)
    {
        throw new Error("All Fields are managatory");
        res.status(400)
    }
    const product = await Product.create({
        name, // in es6 object key and value is same name then we can refer it only one time
        price
    });

   res.status(201).json({success:1,error:0,data:product});
});


//@desc update product
//@route PUT /products/:id
//@access public 

const updateProduct = asynchandler(async(req,res)=>{
    const product = await Product.findById(req.params.id);
    if(!product){
        res.status(404);
        throw new Error("Product Not Found");
    }
   

    const updated_product  = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});

    res.status(200).json({success:1,error:0,data:updated_product});
});


//@desc delete product
//@route DELETE /products/:id
//@access public 

const deleteProduct = asynchandler(async(req,res)=>{

    const product = await Product.findById(req.params.id);
    if(!product){
        res.status(404);
        throw new Error("Product Not Found");
    }
   
    await Product.deleteOne();

    res.status(200).json({success:1,error:0,data:product});
});

module.exports = {getProduct,getProductDetailById,createProduct,updateProduct,deleteProduct};