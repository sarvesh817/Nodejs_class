//Mongo DB  database
//---------------------------------------------------------------
//noSql db
//data stored in collection
//collection don't have row and collumn
//data stored in form of object.

//mongodb and mongodb compass both are different.

//1)for insertone
/* db.table_name.insertOne({
    name:"ram",
    brand:"hp",
    price:250,
});  */

/* for Many records Inserted */
//db.products.insertMany([{name:'madhav',brand:'Hp',price:250},{name:'mahadev',brand:'sky',price:750}])   

//2)to show all records
//db.products.find()

//3)for Update
//db.products.updateOne({name:"hari"},{$set:{brand:'oppo'}})

//4)delete
//db.products.deleteOne({brand:"Dell"})

//5)for only single record fetch
//let response=await collection.find({name:"Narayan"}).toArray();   





