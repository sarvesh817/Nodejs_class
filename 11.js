//how node js works  //2:40 ki videos you can see again for more clearification (Anil sidhu) 

//call stack :-imp  1
//Node api          2
//Callback Queue    3 (when it process all these steps that is known as EVENT LOOP)



//Imp:-when we executed a code then our each function call stack under register 
//and mapping which function will call (first or last) before executing.

//in background main() is called for even we are executing a single  line code that will run inside the main function.

//if you have called other function like console.log so that will register in the call stack but after main() like log()

//main() is global function it doesn't define anywhere.


//main() will complete after all other function will complete and after in last main will call and will free the queue of call stack.


//Node js:- 92% use javascript and 8% use c,c++.

//setTimout() := these type of things comes from c++ and it register in the second phase which is node api and will go third phase which is
//Callback Queue and it will not again inside the call stack till call back will not be empty so:--

//So, after clear call stack all work will be done in last callback will go in the call stack and so that's why it has printed 
//0 time setTimeout console after the main function finish their work. 

//example:- Quiz

console.log("start console");

setTimeout(()=>{
    console.log("2 sec logs");
},2000); 

setTimeout(()=>{
    console.log("0 sec logs");
},0); 

console.log("end console"); 

//output:-






