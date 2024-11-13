import foodModel from '../models/foodModel.js';
import fs from 'fs';

const addFood = async (req,res) =>{
    let image_filename = `${req.file.filename}`;
    const food  =  new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })

    try{
        await food.save();
        res.json({succes:true,message:"Food Added"});
    }catch(err)
    {
        console.log(err);
        res.json({success:false,message:"Error"});
    }
}   

const listfood = async (req,res)=>{
    try{
        const foods = await foodModel.find({});
        res.json({succes:true,data:foods });
    }catch(err)
    {
        console.log(err);
        res.json({succes:false,message:"ERROR"})
    }
}

const removeFood = async (req,res)=>{
    try{   
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{});
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({succes:true,message:"Food Removed"});      
    }
    catch(error)
    {
        console.log(error);
        res.json({succes:false,message:"Error"});
    }
}
export {addFood,listfood,removeFood}