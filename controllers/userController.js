const asynchandler = require("express-async-handler");


//@desc register user
//@route POST /api/users/register
//@access public 
const register = asynchandler(async(req,res)=>{
    res.status(200).json({success:1,error:0,msg:"register"});
});

//@desc login user
//@route POST /api/users/login
//@access public 
const login = asynchandler(async(req,res)=>{
    res.status(200).json({success:1,error:0,msg:"login"});
});


//@desc get current user
//@route POST /api/users/me
//@access public 
const get_current_user = asynchandler(async(req,res)=>{
    res.status(200).json({success:1,error:0,msg:"get current user information"});
});

module.exports = {register,login,get_current_user};