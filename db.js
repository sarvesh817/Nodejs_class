const mysql=require("mysql");

const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'mongo_db',
});

con.connect((err) =>{
    if(err){
        console.warn("Error!");
    }else{
        console.warn("Database connected");   
    }
});


module.exports=con;
 