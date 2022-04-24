import { logout } from "../models/user";
import { cookieAuth } from "../utils/jwtUtils";
const { Router } = require("express");
const router = Router();
const {signup,login,generateOTP,resetPassord} = require("../models/user")

router.post("/signup",signup);
router.post("/login",login);
router.get("/login",cookieAuth);
router.post("/generateOTP",generateOTP)
router.post("/reset",resetPassord)
router.get("/logout",logout)


export default router;