//Read data from MongoDB

const db_connect=require('./mongodb');

/* db_connect().then((res) => {
  console.warn(res.find().toArray());
}); */


const main=async ()=>{
    let data=await db_connect();
    data=await data.find().toArray();
    console.warn(data); 
}

main();