//Middleware
//It's Application Middleware 
//It apply on all appkication 


//when we need to change request in the request and responses then we we use middleware.
//if i will do same task in the routes then not fisible bcz in this just make a function and i can use on multiply times reusability
//and in the routes same will have to write multiple times so we don't this work on routes we work on middleware.

const express=require("express");
const app=express();
//Middlware below


const req_filter=(req,res,next)=>{
    if(!req.query.age){
        res.send("Please Provide your age");
    }else if(req.query.age < 18){
        res.send("You can't access this page");        
    }else{
        next();      
    }
}


//it's used for all routes by defalut it is a applicatoin middleware.  
//app.use(req_filter);  

//-------------------------------------------
app.get('/',(req,res)=>{
    res.send("Welcome to homepage");    
});
  
app.get('/users',(req,res)=>{
    res.send("Welcome to Users page");        
});

/* Route-level Middleware */
//firstly :- remove app.use(req_filter);  and directly pass like below.

app.get('/users_get',req_filter,(req,res)=>{
    res.send("Welcome to Users get page");          
});
//end

app.listen(5002);


//Middleware types:-
//1)Application level middleware
//2)Route-level   :- it works on 1)self route 2)group route 3)all route      //Imp:- first remove app.use(parameter); //and use directly with routes example above.
//3)error- handling
//4)built in
//5)third party