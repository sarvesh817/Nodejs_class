//Express JS
const express=require("express");
//making exutable state
const app=express();
//routes
app.get('',(req,res)=>{
    res.send("this is homepage page");  
});

//about us page
app.get('/about_us',(req,res)=>{ 
    res.send("this is about us page");   
});

app.listen(35000); 