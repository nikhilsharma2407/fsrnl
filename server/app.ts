import express, { NextFunction } from "express";
import router from "./routes/routes";
import userRouter from "./routes/users";
import errorLogger from "./utils/errorLogger";
const db = require("./db_connection");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api',router);
app.use('/user',userRouter);
app.use(errorLogger)

app.listen(5000,()=>{console.log("server running on port 5000")})