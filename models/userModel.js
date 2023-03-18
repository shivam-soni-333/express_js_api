const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"user name is required"]
    },
    email:{
        type:String,
        require:[true,"Email is required"]
    },
    password:{
        type:String,
        require:[true,"password is required"]
     }
},{
    timestamps:true
});

module.exports = mongoose.Model("User",userSchema);