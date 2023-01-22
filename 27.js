//Upload file in node js using = MULTER

//without multer we can upload file but will have to write more code so.

const express=require("express");
const multer=require("multer");
const app=express();


//function making for file upload
const upload=multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb)
        {
            cb(null,"uploads");
        },
        filename:function(req,file,cb)
        {
            cb(null,file.fieldname+"-"+Date.now()+".jpeg");  
        }
    })
}).single("user_file"); 




app.post('/file_upload' ,upload, (req,res) => {
    res.send("file upoaded successfully...");  

});

app.listen(5500);