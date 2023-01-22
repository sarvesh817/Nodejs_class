//Start with Mongoose

//mongoose is advanced it connect db with nodejs.
//mongodb updated version is moongoose and in this you can apply validation where in mongodb you can't like identify only int data validation so that string will not save so moongoose does it.

//mongoose schema apply and field control and can apply validation

//mongoose has 2 parts are 1)Schema 2)model
//1)Schema :-  Fields are known as Schema which is defined inside the schema.
//2)Model:- model id used to connect that schema, and connect nodejs and mongodb.

/* Crud with Mongoose */
 
const mongoose=require("mongoose");
mongoose.set('strictQuery', false);

mongoose.connect("mongodb://127.0.0.1:27017/nodejs_project");    
const product_schema=new mongoose.Schema({
    name:String,
    price:Number
});

const product_model=mongoose.model('products',product_schema);

const Insert_data = async () => {
    let data=new product_model({
        name:"ram G",
        price:2500,  
    });
    let result=await data.save();
    console.log(result);
}

//Insert_data(); 

/* 2)Update  */

const update_data=async () => {
    // const product_model=mongoose.model('products',product_schema);
     let data = await product_model.updateOne(
        {name:'Shyama G'},
            {   
                $set:{name:'hari G',price:760}
            }
        
        );
        console.log(data);
}

//update_data();  

/* 3)Delete  */

const delete_data=async () => {
    product_model=mongoose.model('products',product_schema);
    let data=await product_model.deleteOne(
        {name:'hari G'}
    );
    console.log(data);
}

//delete_data();    


/* 4)Read */

const fetch_data=async () => {  
    //const product_model=mongoose.model('products',product_schema);
    let data=await product_model.find();
    //for specific record 
    //let data=await product_model.find({name:"hari G"});
    console.log(data);
}

fetch_data();
