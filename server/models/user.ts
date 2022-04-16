import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
const { Schema } = mongoose;

import {generatePassword,verifyPassword} from "../utils/passwordUtil"

const userSchema = new Schema({
    username:String,
    password:String,
    name:String
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

export default UserModel;
module.exports = {signup,login};