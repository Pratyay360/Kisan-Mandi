import express from "express";
import { createUser,loginUser,farmerInfo, vendorInfo, editUserById,acceptOrder } from "./userController.js";
import authenticate from "../middlewares/auth.js"
import rateLimit from "express-rate-limit";
const userRouter = express.Router();

// Rate limiter: maximum of 100 requests per 15 minutes
const acceptOrderLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: "Too many requests, please try again later."
});

userRouter.post("/register", createUser )
userRouter.post("/login", loginUser )
userRouter.get('/farmers/:userId', authenticate, farmerInfo)
userRouter.get('/vendors/:userId', authenticate, vendorInfo)
userRouter.put('/update/:userId', authenticate, editUserById)
userRouter.post('/acceptOrder', authenticate, acceptOrderLimiter, acceptOrder)
export default userRouter