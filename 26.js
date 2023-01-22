//Search Api == like mysql

const express=require('express');
const mongoose=require("mongoose");
mongoose.set('strictQuery', false);
//const db_connect=require('./mongodb');
//const mongodb=require('mongodb');   
const app=express();



mongoose.connect("mongodb://127.0.0.1:27017/nodejs_project");    
const product_schema=new mongoose.Schema({
    name:String,
    price:Number
});


const product_model=mongoose.model('products',product_schema);
app.use(express.json());

//search api route:-
 



app.get("/search/:key",async (req,res) => {
    let data=await product_model.find(
        {
            "$or": [
                        {"name":{$regex:req.params.key}}, 
                        {"brand":{$regex:req.params.key}} 
                  ]
            
        }
    );
    res.send(data);  
}); 
  
app.listen(5500);   