//Show file list
//user path module
//fs:-File system

const fs=require("fs");

//by using path
const path=require("path");
const { exit } = require("process");
const dir_path=path.join(__dirname,"eight_files/");
//console.log(dir_path);


//process.exit();


for(i=0;i<5;i++){
    fs.writeFileSync(dir_path+"hello_"+i+".txt","testing files");  
}
 

//2nd :- Read the files of directory 
fs.readdir(dir_path,(error,files)=>{
    //files list print in the array format
    console.log(files);

    //or print data using for each loop
    files.forEach((item)=>{
        console.log(item); 
    });
}); 


//:-this is our web server by using this technique we only get inside this folder files but we can't get D: drive data or outside. 