import express from "express";
import {config} from "./config/config.js"
import cors from "cors"
// import userRouter from "./users/userRouter.js";
// import auctionRouter from "./auctions/auctionRouter.js";

const app = express();


app.use(cors(
    {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true,
        // httpsOnly: true
    }
)) 
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.json({message: "hello"});
});

export default app