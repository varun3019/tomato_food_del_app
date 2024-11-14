import express from "express";

import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config';
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import cors from "cors";
const app = express();
const port = 4000;
const urls = [ 'https://tomato-food-del-app-admin.onrender.com',
    'https://tomato-food-del-frontend-1edm.onrender.com'];
app.use(cors({
    origin: urls, // Specify your front-end URL here
    methods: ['GET', 'POST'], // Allowed HTTP methods
}));
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/food",foodRouter);
app.use("/images",express.static("uploads"));
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);
app.get("/",(req,res)=>{
    res.send("Api working");
})

app.listen(port,()=>{
    console.log(`running ${port}`);
})
