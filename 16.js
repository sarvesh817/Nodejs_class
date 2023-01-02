//Template Engines

//95%  :- Node js me we shall make Api 
//5%   :- only will make dynamic website

//template engines used for making dynamic pages.

//npm install ejs

//firstly befor use we tell about engines we are using like below.


const express=require("express");
const path=require("path");
const app=express();

const public_path=path.join(__dirname,"public/");

//telling here about ejs
app.set('view engine','ejs');  

app.get('/profile',(req,res)=>{
    var data={
        name:"sarvesh",
        mobile:"998988433",
        skills:['php','jquery','wordpress','javascript']   
    }
    res.render("profile",{data});                 
}); 

app.listen(5001);




