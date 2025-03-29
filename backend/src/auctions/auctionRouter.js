import express from "express";
//import auctionController from "../controllers/auctionController.js"
import { createAuction,getAuctions,isOwner,updateAuction,getAuctionById,getMyAuctions,updateAuctionStatus } from "./auctionController.js";

import authenticate from "../middlewares/auth.js";

const auctionRouter =  express.Router();

auctionRouter.post("/create",authenticate, createAuction)
auctionRouter.get("/",authenticate, getAuctions)
auctionRouter.put("/update/:id",authenticate,isOwner, updateAuction)
auctionRouter.get('/:id',authenticate, getAuctionById)
auctionRouter.put('/updatestatus/:id',authenticate, updateAuctionStatus)
auctionRouter.get('/myauctions/:id',authenticate, getMyAuctions)
export default auctionRouter