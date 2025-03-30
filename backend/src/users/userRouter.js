import express from "express";
import { createUser,loginUser,farmerInfo, vendorInfo, editUserById } from "./userController.js";
import authenticate from "../middlewares/auth.js"
const userRouter = express.Router();

userRouter.post("/register", createUser )
userRouter.post("/login", loginUser )
userRouter.get('/farmers/:userId', authenticate, farmerInfo)
userRouter.get('/vendors/:userId', authenticate, vendorInfo)
userRouter.put('/update/:userId', authenticate, editUserById)
export default userRouter