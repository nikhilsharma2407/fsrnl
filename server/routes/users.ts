const { Router } = require("express");
const router = Router();
const {signup,login} = require("../models/user")

router.post("/signup",signup);
router.post("/login",login);


export default router;