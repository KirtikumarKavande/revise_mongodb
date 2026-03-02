const { MongoClient, Collection, ObjectId } = require('mongodb');
const env= require('dotenv')
env.config()
const url = process.env.DB_URL;
const client = new MongoClient(url);
async function main() {
    await client.connect();
    console.log('Connected successfully to server');

    
    // creating new db
    const dbName = "mongodbpractice"
    const db = client.db(dbName);
    await db.createCollection("users")
    const collection = db.collection('users')

    //create 
    await collection.insertOne({ name: "Ronaldo", game: "Football" })


    // read
    const docs1 = collection.find()
    const docs2 = collection.find({ game: "Football" })
    const docs3 = docs1.sort({ name: 1, game: -1 }).skip(2).limit(2)
    // 1:ascending -1:descending
    const data=docs1.map((item)=>({name:item.name, age:item.age})) //gives objects with name and age property only



    // update
    await collection.updateOne({ name: "Kirtikumar" }, { $set: { name: "gautam" } })
    collection.replaceOne({ _id: new ObjectId('69a51cb493b8e2b16a430c3d') }, { person: "grate" })
    await collection.updateOne({ _id: new ObjectId('69a51e684da79b3a0435d9cf') }, { $unset: { game: "anything does not matter" } })

    // delete
  




}
main()
    .then(console.log)
    .catch(console.error)