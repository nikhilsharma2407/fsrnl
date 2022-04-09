import express, { NextFunction } from "express";
import router from "./routes/routes";
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api',router);
// app.use('/user',users);
// app.use('/admin',admin);

app.listen(5000,()=>{console.log("server running on port 5000")})