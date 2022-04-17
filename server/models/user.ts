import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { DB_URL } from '../constants';
import { generateToken } from '../utils/jwtUtils';
const { Schema } = mongoose;

import {generatePassword,verifyPassword} from "../utils/passwordUtil"

const userSchema = new Schema({
    username:{type:String,unique:true},
    password:String,
    name:String,
    otp:String,
});

const UserModel = mongoose.model("user", userSchema);



const signup = async(req:Request,res:Response,next:NextFunction)=>{

    try {
        console.log(req.body);
        const {password} = req.body;
        console.log(password);
        
        const hashedPassword = await generatePassword(password);
        console.log(hashedPassword);
        
        req.body = {...req.body,password:hashedPassword};
    
        const user = await UserModel.create(req.body);
        if(user){
            res.status(200);
            res.send(`Welcome ${user.name}`);
        }else{
            const err:any = new Error("Unable to signup");
            throw(err);
        }
        
    } catch (error) {
        next(error);
    }
};

const login = async(req:Request,res:Response,next:NextFunction)=>{

    try {
        console.log(req.body);
        const {username,password} = req.body;
    
        const user = await UserModel.findOne({username});
        if(user){
            console.log(user.password);
            console.log(password);
            const isPwdValid = await verifyPassword(password,user.password);
            console.log(isPwdValid);
            
            if (isPwdValid){
                const {username,name} = user;
                const token = generateToken({username,name});
                res.cookie('token',token,{httpOnly:true});
                res.status(200).send({success:true,message:`${username} logged in successfully!!!`});
            }
            else{
                const err:any = new Error("Incorrect password");
                err.status = 401;
                throw(err);
            }

        }else{
            
            const err:any = new Error(`<h1>user does not exist!!!</h1>`);
            err.status = 404;
            throw(err);
        }
        
    } catch (error) {
        next(error);
    }
};

const generateOTP = async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const {username} = req.body;
        console.log(username);
        
        const user = await UserModel.findOne({"username":username});
        if(user){
            const otp  = 100000+(Math.random()*900000)|0;
            const data = await UserModel.findOneAndUpdate({username},{$set:{otp}});
            console.log(data);
            if(data){
                res.send({success:true,message:`OTP for resetting password is ${otp}`});
            }
        }
        else{
            const err:any = new Error("User not found!!!");
            err.status = 404;
            throw err
        }

    } catch (error) {
        next(error);
    }
    
}
const resetPassord = async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const {username,otp,password} = req.body;
        const user = await UserModel.findOne({username});
        if(user){
            if(otp==user.otp){
                const hashedPassword = await generatePassword(password);
                const data = await UserModel.findOneAndUpdate({username},{$set:{password:hashedPassword,otp:null}});
                console.log(data);
                if(data){
                    res.status(200).send({success:true,message:"Password reset successfully"});
                }
            }else{
                const err:any = new Error("Invalid OTP!!!");
                err.status = 403;
                throw err     
            }
        }else{
            const err:any = new Error("User not found!!!");
            err.status = 404
            throw err
        }     
    } catch (error) {
        next(error);
    }
   
}



module.exports = {signup,login,generateOTP,resetPassord};