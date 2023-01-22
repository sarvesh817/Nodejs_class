//how to make basic server

//const http=require('http');

/* http.createServer((req,res)=>{
    res.write("<h1>hello world</h1>");  
    res.end();





}).listen(4700); */



//how to write data in the existing file inside the creating server.  

var http = require('http');
var fs = require('fs');

const PORT=8081; 

fs.readFile('./hello.txt','', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write("Haribol");  
        response.end();  
    }).listen(PORT);
});





//Note :- Request and Response in which module handle so we can ans -> http module 
