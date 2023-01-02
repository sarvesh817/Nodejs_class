//Make HTML page in NodeJs  and folder is public and remove file extension from url

//404 file should be in last ok ? Reminder 

const express=require("express");
const path=require("path");
const app=express();

const public_path=path.join(__dirname,"public/");

//to load html page and show data 
app.use(express.static(public_path));

app.get('/about',(req,res)=>{
     res.send("about  page");     
}); 

/* app.get('/',(req,res)=>{
    res.send("index  page");        
}); */    




//for 404 page 




//res.send :- for send some message 
//res.sendFile :- for send html file

/* Remove extension from url and make 404 page*/

/* app.get('/',(req,res)=>{
    res.send("index page");    
}); */

 

/* 
app.get('*',(req,res)=>{
    res.sendFile(`${public_path}/404.html`);              
}); */

app.listen(27000);                 

//Q1 :- why path use?
//path used for excess our folder path to get it help.

//static:- used for load static page or static content loading pupose.
//directly css can't load that's way tell you after some time. 

