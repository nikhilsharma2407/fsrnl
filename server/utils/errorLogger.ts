import fs from "fs";


const errorLogger = (err,req,res,next)=>{
    console.log(err);
    console.log(err.message);
    console.log(req.path);
    
    res.status(err.status || 500);
    const data = `${new Date()} ${err.message} ${req.path} ${err.stack}\n`
    fs.appendFile('error.log',data,(err)=>{
        if(err)console.log("Error while logging");
    });
    // res.send({success:false,message:err.message});
    res.send(err.message);
}

export default errorLogger