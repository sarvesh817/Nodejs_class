//Mysql connect with Node Js
//what is callback function ??


const { resolveInclude } = require("ejs");
const mysql=require("mysql");


const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'mongo_db',
});
//callback function below
con.connect((err) =>{  
    if(err){
        console.warn("error");
    }else{
        console.warn("Database connected");     
    }
});

con.query("select * from user",(err,res)=>{
    console.warn("Result -",res);  
});

