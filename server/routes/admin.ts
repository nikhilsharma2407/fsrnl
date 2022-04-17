import { cookieAuth } from "../utils/jwtUtils";
const { Router } = require("express");
const router = Router();
const {signup,login,generateOTP,resetPassord} = require("../models/user")

router.get("/test",async(req,res,next)=>{
    const {username} = req;
    res.status(200).send({success:true,message:`${username} authenticated via cookie`})
});
router.get("/getUsers",async(req,res,next)=>{
    const {username} = req;
    res.status(200).send({success:true,message:`${username} authenticated via cookie`})
});


export default router;