const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please add Product Name"]
    },
    price:{
        type:String,
        required:[true,"Please add Price of product"]
    },
    img:{
        type:String,
        // required:[fase,"Please add image path of product"]
    },

},{
    timestamps:true,
});

module.exports = mongoose.model("Product",productSchema)