//Routing with express js
//get values with routing

//Express JS
const express=require("express");
const app=express();
//routes
app.get('',(req,res)=>{
    var demo=req.query.name;
    res.send(`${demo}`);    
});

 

app.listen(44000);   