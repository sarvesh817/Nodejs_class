//common DB file 
const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const database = "nodejs_project";
const client = new MongoClient(url);

async function db_connect() {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection("products");
}


module.exports=db_connect; 