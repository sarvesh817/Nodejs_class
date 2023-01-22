// First API with MongoDB

//4 methods are used in api :- Get,Post,Put,Delete

const express=require('express');
const db_connect=require('./mongodb');
const mongodb=require('mongodb');   
const app=express();

//for get json data from post method in Api
app.use(express.json());

//Get Method or Read data 
app.get ('/',async (req,res) => {
    console.log("rest");
    let data=await db_connect();
     data=await data.find().toArray();
    console.log(data);
    res.send(data);   
});

//Post Method or create data
app.post('/',async (req,res) =>{
    let data=await db_connect();
    let result=await data.insertOne(req.body);     
    res.send(result);    
}) 


//PUT Method or update data
app.put('/',async (req,res) =>{
    let data=await db_connect();
    let result=await data.updateOne(
        {name:"Madhav"},
        {$set :req.body}  
        );     
    res.send(result);    
})

/* Note :- For dynamic where condition pass you have to send name from query sting like (/name) from postman 
//and pass here req.params.name and change routes like /:name*/ 


//Delete Method or delete data
app.delete('/:id',async (req,res) =>{
    let data=await db_connect();
    //need to make instance before delete it above then you can delete it like :- //const mongodb=require('mongodb');     
    let result=await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)} );     
    res.send(result);    
})
app.listen(5002);          
