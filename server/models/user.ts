import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
const { Schema } = mongoose;


const userSchema = new Schema({
    username:String,
    password:String,
    name:String
});

const UserModel = mongoose.model("user", userSchema);



const signup = async(req:Request,res:Response,next:NextFunction)=>{

    try {
        console.log(req.body);
        // const {name,username,password} = req.body;
    
        const user = await UserModel.create(req.body);
        if(user){
            res.status(200);
            res.send(`Welcome ${user.name}`);
        }
        
    } catch (error) {
        res.status(500);
        res.send("Unable to complete signup");
    }
};

const login = async(req:Request,res:Response,next:NextFunction)=>{

    try {
        console.log(req.body);
        const {username,password} = req.body;
    
        const user = await UserModel.findOne({username});
        if(user){
            if (password === user.password){
                res.status(200).send({success:true,message:`${username} logged in successfully!!!`});
            }
            else{
                res.status(401).send({success:false,message:`Incorrect password`});
            }

        }else{
            res.status(404).send({success:false,message:"user does not exist!!!"});
        }
        
    } catch (error) {
        console.log(error);
        
        res.status(500);
        res.send("Unable to login-\n"+error);
    }
};

export default UserModel;
module.exports = {signup,login};