//make a simple API

const http=require('http');
const data=require('./six2');
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application\json'});
    res.write(JSON.stringify(data));
    res.end();  
}).listen(34000);    





//200 :- staus ok
//201 :- Created
//404 :- Not exist
//500 :- internal server error