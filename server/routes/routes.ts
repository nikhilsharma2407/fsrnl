import { NextFunction, Request, Response, Router } from "express"
const router = Router();


router.get('/abcd',(req:Request,res:Response,next:NextFunction)=>{
    console.log(req.path);
    // abcd acd
    res.status(200).send("ab?cd")    
})
router.get('/ab+cd',(req:Request,res:Response,next:NextFunction)=>{
    console.log(req.path);
    // one or more preceeding character --> abcd abbbcd abbbbbbbbbbbbbbbbbbbbbbcd
    res.status(200).send("ab+cd")    
})
router.get('/ab*cd',(req:Request,res:Response,next:NextFunction)=>{
    console.log(req.path);
    // ab<anything>cd -> abcd ab1cd abtyuafguycd
    res.status(200).send("ab*cd")    
})
router.get(/.*name$/,(req:Request,res:Response,next:NextFunction)=>{
    console.log(req.path);
    // 
    res.status(200).send(".*name$")    
})

// . - they are used as is
router.get('/path/:from-:to',(req:Request,res:Response,next:NextFunction)=>{
    console.log(req.params);
    // <from>-<to>
    res.status(200).send(req.params)    
})


// 
router.get("/user/:id(u[0-9]+)",(req:Request,res:Response,next:NextFunction)=>{
    const userData = {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      }
    console.log(req.path);
    console.log('params', req.params);
    console.log('query',req.query)
    res.status(200);
    res.send({success:true,data:userData});
});

router.get("/test",(req:Request,res:Response,next:NextFunction)=>{
    console.log(req.path);
    res.status(200).send("request recieved successfully")    
});

router.post("/login",(req,res,next)=>{
    console.log(req.body);
    res.send(req.body);
});

router.post("/signup",(req,res,next)=>{
    interface User{
        username:string;
        password:string
    };
     const user:User = req.body;
    console.log(user);
    res.send(req.body);
})

router.all("/*",(req,res,next)=>{
    res.status(501);
    res.send("invalid path");
})

export default router
