//Asynchronous basics in nodeJs

//Async programming drawbacks

let a=10;
let b=0;
 
/* setTimeout(()=>{
    b=20; 
},2000);

console.log(a+b);  */

//it's printing 10 output that is the drawback so this problem is handled by promises.

//how to handle it by promises

let wait_response=new Promise((res,rej)=>{

    setTimeout(()=>{
        res(30);  
    },2000);


}); 

 wait_response.then((b)=>{
    console.log(a+b); 
}).catch((error)=>{
    console.log(error);  
}); 