//Crud with file system

  const fs=require("fs");
  const path=require("path");
  const dir_path=path.join(__dirname,"nine_crud/");
  const file_path=`${dir_path}fruit.txt`;
  console.log(file_path);
  //process.exit();

//1) created file
// fs.writeFileSync(file_path,'this is testing file');

//2) Read file
//buffer is just temporary location which need some memory to perform operation that is know is buffer.

/*  fs.readFile(file_path,'utf-8',(err,item)=>{
    console.log(item);
})  */

//3) Update file
/*  fs.appendFile(file_path,'\n and file name is data.txt',(err)=>{
    if(!err) console.log("File is updated");   
})  */

//4)Rename file
/*  fs.rename(file_path,`${dir_path}/data.txt`,(err)=>{
    if(!err) { console.log("File  name is updated");  } 
    else { console.log('ese'); } 
}) */
 

//5)Delete file

//fs.unlinkSync(`${dir_path}/data.txt`);


//:-Buffer - it's a temporary memory location where node js need some memory to perform operaton that is known as buffer.



 