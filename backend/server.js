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
const allow = ["https://tomato-food-del-backend-gh2m.onrender.com/api/food/list"]
app.use((req, res, next) => {
    // Allow specific origin
    res.setHeader("Access-Control-Allow-Origin",allow );

    // Allow methods - you may want to reduce this based on your needs
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

    // Allow specific headers
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
    );

    // Allow credentials for cookies or authentication
    res.setHeader("Access-Control-Allow-Credentials", "true");

    // Set cache for preflight request
    res.setHeader("Access-Control-Max-Age", 7200);

    next();
});

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
