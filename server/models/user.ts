import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { generateToken } from '../utils/jwtUtils';
const { Schema } = mongoose;

import {generatePassword,verifyPassword} from "../utils/passwordUtil"

export const userSchema = new Schema({
    username:{type:String,unique:true},
    password:String,
    name:String,
    otp:String,
    friendList:[String]
});

export const UserModel = mongoose.model("user", userSchema);



export const signup = async(req:Request,res:Response,next:NextFunction)=>{

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

export const login = async(req:Request,res:Response,next:NextFunction)=>{

    try {
        console.log(req.body);
        const {username,password} = req.body;
    
        const user = await UserModel.findOne({username},{_id:0,__v:0});
        if(user){
            console.log(user.password);
            console.log(password);
            const isPwdValid = await verifyPassword(password,user.password);
            console.log(isPwdValid);
            
            if (isPwdValid){
                const {username,name} = user;
                const token = generateToken({username,name});
                res.cookie('token',token,{httpOnly:true});
                res.status(200).send({success:true,message:`${username} logged in successfully!!!`,data:user});
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

export const generateOTP = async(req:Request,res:Response,next:NextFunction)=>{
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
export const resetPassord = async(req:Request,res:Response,next:NextFunction)=>{
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

export const logout = async(req:Request,res:Response,next:NextFunction)=>{
    res.clearCookie('token');
    res.status(200).send({success:true,message:"user loggedout successfully!!!"});
}

export const addFriend = async(req:Request,res:Response,next:NextFunction)=>{
    // logged in user
    // friend to be added
    const {id,username,friendName} = req.body;
    try {
        // "modifiedCount": 1,
        const data = await UserModel.updateOne({username},{$addToSet:{friendList:id}});
        console.log(data);
        if(data.modifiedCount){
            res.status(200);
            const response = {success:true,message:`You are now friends with ${friendName}!!!`}
            res.send(response);
        }
        if(data.matchedCount){
            const response = {success:true,message:`You are already friends with ${friendName}!!!`}
            res.send(response);
        }
        // const data = await user
    } catch (error) {
        next(error);
    }
}

export const removeFriend = async(req:Request,res:Response,next:NextFunction)=>{
    // logged in user
    // friend to be added
    const {id,username,friendName} = req.body;
    try {
        // "modifiedCount": 1,
        const data = await UserModel.updateOne({username},{$pull:{friendList:id}});
        console.log(data);
        if(data.modifiedCount){
            res.status(200);
            const response = {success:true,message:`You are no longer friends with ${friendName}!!!`}
            res.send(response);
        }
        // const data = await user
    } catch (error) {
        next(error);
    }
}