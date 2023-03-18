const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true,"username is required"]
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

module.exports = mongoose.model("User",userSchema);