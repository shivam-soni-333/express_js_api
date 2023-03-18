const asynchandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt  = require("jsonwebtoken");

//@desc register user
//@route POST /api/users/register
//@access public 
const register = asynchandler(async(req,res)=>{
    const {username,email,password} = req.body;
    if(!username || !email || !password)
    {
        res.status(400);
        throw new Error("All field required");
    }
    const userAvailble = await User.findOne({email});
    if(userAvailble)
    {
        res.status(400);
        throw new Error("Email Already Exists");
    }
    //HashPassword
    const HashPassword = await bcrypt.hash(password,10);
    const user = await User.create({username,email,password:HashPassword}); 
    
    
    res.status(200).json({success:1,error:0,msg:`User Created Succesfully with id ${user.id} `});
});

//@desc login user
//@route POST /api/users/login
//@access public 
const login = asynchandler(async(req,res)=>{
    const{email,password} = req.body;
    if(!email && !password)
    {
        res.status(400);
        throw new Error("All Fields are manadtory");
    }
    const user = await User.findOne({email});
    if(user)
    {
        const is_match = await bcrypt.compare(password,user.password);  
        if(is_match){
            const accessToken = jwt.sign({
                user:{
                    username:user.username,
                    email:user.email,
                    id:user.id
                }
            },process.env.ACCESS_TOKEN_SECERT,{expiresIn:"1h"}
            );
            res.status(200).json({success:1,error:0,token:accessToken});
        }else{
            res.status(401).json({success:0,error:1,msg:"invalid credentials"});   
        }
    }else{
        res.status(401).json({success:0,error:1,msg:"invalid credentials"});
    }

    res.status(200).json({success:1,error:0,msg:"login"});
});


//@desc get current user
//@route POST /api/users/me
//@access public 
const get_current_user = asynchandler(async(req,res)=>{
    
    res.status(200).json({success:1,error:0,data:req.user});
});

module.exports = {register,login,get_current_user};