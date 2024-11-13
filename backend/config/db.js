import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://varun:varun@cluster0.dwjau.mongodb.net/food-dev-app").then(()=>{console.log("DB Connected");});
}

