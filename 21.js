//Insert data in mongoDB with NodeJS

//if  you will not give properly ./ then it will load mongodb module. so give it properly as like below.

const db_connect=require('./mongodb');
//inserting data in the table 

const insert= async () => {
        const db=await db_connect();
        //for insert one record will use (insertOne) below and multiply data make array and and use (insertMany) and save data. 
        const result=await db.insertOne(
            {
                name:'Narayan',
                brand:'HP',
                price:250

            }
        )
        if(result.acknowledged){
            console.log("Data Inserted Successfully");
        }else{
            console.log("Insertion Failed");  
        }

}

//insert();


/* Need to discuss about why db returning promiseand discuss everthing about it */  


