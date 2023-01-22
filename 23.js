//Delete data in mongoDB with NodeJs

const db_connect=require('./mongodb');

const delete_data =async () => {
    let data=await db_connect();
    //for delete multiple write deleteMany  
    let result=await data.deleteOne({name:'ram'});  
    console.log(result);           
}
delete_data();