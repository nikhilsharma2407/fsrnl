import express, { NextFunction } from "express";
import router from "./routes/routes";
import userRouter from "./routes/users";
import admin from "./routes/admin"
import errorLogger from "./utils/errorLogger";
import cors, { CorsOptions } from "cors";
import dotenv from "dotenv"
import { authMiddleware } from "./utils/jwtUtils";
dotenv.config();

const db = require("./db_connection");
const cookieParser = require("cookie-parser");
const app = express();

const corsOptions:CorsOptions = {
    origin:"http://localhost:3000",
    credentials:true
}
app.use(cors(corsOptions));
app.use(cookieParser())
app.use(express.json());
app.use('/api',router);
app.use('/user',userRouter);
app.use('/admin',authMiddleware,admin);
app.use(errorLogger)

app.listen(process.env.PORT,()=>{
    console.clear();
    ;console.log("server running on port 5000")})