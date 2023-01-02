//input from command line Interface


//console.log(process.argv);
 const fs=require("fs");

const input=process.argv;
//console.log(input);
/* const test=fs.writeFileSync(input[2],input[3]); 
console.log(test); */


//2nd Part

if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4]); 
}else if(input[2]=="remove"){
    fs.unlinkSync(input[3]);
}else{
    console.log("invalid input");    
} 



//Note :- when we do remove then no need to indentify arguments

//1)For add:-node seven.js add data.txt "this is god"
//2)For remove:-node seven.js remove data.txt

