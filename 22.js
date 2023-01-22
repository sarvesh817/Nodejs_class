//Update data  

const db_connect=require('./mongodb');

const update_data=async  () =>{
    let data=await db_connect();
    //for multiple you will write update or updateMany all date will updated.   
    let result=await data.updateOne(
        {name:'demo'},
        {$set:{name:'demo',price:4900}}
    );
    console.log(result);
}

update_data();      