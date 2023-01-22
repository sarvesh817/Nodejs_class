//Event and event Emitter in nodejs

//Node js almist all things are event based
//it's inbuilt module no need to extenally install
//below EventEmiiter is class and in the class first chracter keep capital so we dit it.


const express=require("express");
const EventEmitter=require("events");

const app=express();

//function called below of event
let count =0;
const event =new EventEmitter();

//handle here of below event
//1)on 
//2)emit events

event.on("count-API",() => {
    count++;
    console.log("event called "+count); 
});


app.get("/events", (req,res)=> {
    res.send('events api called ');  
    event.emit("count-API");   
});

app.get("/search", (req,res)=> {
    res.send('search api called ');  
});


app.get("/update", (req,res)=> {
    res.send('update api called ');     
});

app.listen(5500);