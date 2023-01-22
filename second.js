//how to create file 
const fs=require("fs");

fs.writeFileSync('hello.txt','teting file');  
const path=require("path");

//how to know dir name and file name
//console.log(__dirname);
//console.log(path.extname(__filename));
const filePath=__filename;



// Extract path information
/* console.log(path.dirname(filePath));  
console.log(path.basename(filePath));  
console.log(path.extname(filePath));   */






