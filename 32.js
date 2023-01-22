//Node js Get API with mysql
const express=require("express");
const con=require("./db");
const app=express();



//error.stack   run and check  




//postman api data without this below line code we can't get 
app.use(express.json());   

app.get('/',(req,res)=>{
    con.query('select * from user',(err,result)=>{
        if(err){
            res.send("Error  coming");   
        }else{
            res.send(result);  
        }
    });
});

//Post Api of mysql insert record or Crud Mysql with Node js

app.post('/insert',(req,res)=>{
    const static_data=req.body;
    con.query('insert into user set ?',static_data,(err,result,fields)=>{
        if(err){
            res.send(err);         
        }else{
            res.send(result);  
        }
    });
});


//update Api

app.put('/update/:id',(req,res)=>{
    const static_data=[req.body.name,req.body.email,req.params.id]; 
    con.query('update user set name = ?,email = ? where id =? ',static_data,(err,result,fields)=>{
        if(err){
            res.send(err);         
        }else{
            res.send(result);  
        }
    });
});

//delete api

app.delete('/delete/:id',(req,res)=>{
    const static_data=req.params.id;
    con.query('delete from user  where id =? ',static_data,(err,result,fields)=>{
        if(err){
            res.send(err);         
        }else{
            res.send(result);  
        }
    });
});

/* Node JS series END */  


app.listen(5500);

