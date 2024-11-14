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
app.use(cors({
    origin: "https://tomato-food-del-app-admin.onrender.com", // Specify your front-end URL here
    methods: ['GET', 'POST'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers (adjust as needed)
    credentials: true, // Allow cookies (if required)
}));
app.use(express.json());


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
