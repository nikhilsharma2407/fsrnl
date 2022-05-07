import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import {UserModel} from "../models/user";
export const generateToken  = (data)=>{    
    const token = jwt.sign(data,process.env.SECRET_KEY,{expiresIn:"1h"});
    console.log(token);
    return token
}

export const cookieAuth = async (req:Request,res:Response,next:NextFunction)=>{
    try {
        const token = req.cookies.token;
        console.log("token from cookie",token);
    
        const data:any = jwt.verify(token,process.env.SECRET_KEY);
        // const data:any = jwt.verify(token,"abc");
        if(data){
            const {username} = data;
            const userdata = await(UserModel.findOne({username},{_id:0,password:0,__v:0}));
            res.status(200).send({success:true,message:`${username} authenticated via cookie`,data:userdata});
        }    
    } catch (error) {
        error.status = 403;
        next(error)
    }
    
}
export const authMiddleware = (req:Request|any,res:Response,next:NextFunction)=>{
    try {
        const token = req.cookies.token;
        console.log("token from cookie",token);
        const data:any = jwt.verify(token,process.env.SECRET_KEY);
        // const data:any = jwt.verify(token,"abc");
        if(data){
            const {username} = data;
            req.username = username 
            next();
        }    
    } catch (error) {
        error.status = 403;
        throw error        
    }
    
}

// const user = {
//     username:"nikhil",
//     name:"Nikhil Sharma"
// }

// generateToken(user);