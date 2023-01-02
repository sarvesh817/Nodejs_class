//render html in nodejs

//Express JS
const express=require("express");
const app=express();

//Html data how to add 
app.get('',(req,res)=>{
    res.send("<h1>this is homepage page =></h1>"+req.query.name);    
});

app.get('/about',(req,res)=>{
    res.send(`<input type="text" placeholder="enter name">`);     
});

//how to give link
app.get('/link_page',(req,res)=>{
    res.send(`<a href="about">About</a>`);       
});

//Json data how to add

app.get('/json_page',(req,res)=>{
    res.send({
        name:'ram',
        email:'ram@gmail.com' 
    });
});


 

app.listen(49000);   

//Q - find object to array how to do it ?