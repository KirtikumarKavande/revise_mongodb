const { MongoClient, Collection } = require('mongodb');
const env = require('dotenv')
env.config()
const url = process.env.DB_URL;

const client = new MongoClient(url);
async function main() {
    await client.connect();
    const db = client.db('collectionPractice')
    const collection = db.collection('users')
    const data = collection.find({city:"Jaipur"},{projection:{name:1,isActive:1, _id:0}})
    console.log(await data.toArray())


    // in operator
    await collection.updateMany({ name: { $in: ["User1", 'User2', 'User3'] } }, { $set: { name: "Kirti" } })

    //ordered insert
    collection.insertMany([{name:"kk"},{name:"dd"}],{ordered:false}) 

}

main()


// i have this data inside db

// const users = [
//   { id: 1, name: "User1", age: 21, city: "Pune", isActive: true },
//   { id: 2, name: "User2", age: 22, city: "Mumbai", isActive: false },
//   { id: 3, name: "User3", age: 23, city: "Delhi", isActive: true },
//   { id: 4, name: "User4", age: 24, city: "Bangalore", isActive: false },
//   { id: 5, name: "User5", age: 25, city: "Chennai", isActive: true },
//   { id: 6, name: "User6", age: 26, city: "Hyderabad", isActive: false },
//   { id: 7, name: "User7", age: 27, city: "Kolkata", isActive: true },
//   { id: 8, name: "User8", age: 28, city: "Ahmedabad", isActive: false },
//   { id: 9, name: "User9", age: 29, city: "Jaipur", isActive: true },
//   { id: 10, name: "User10", age: 30, city: "Surat", isActive: false },
//   { id: 11, name: "User11", age: 31, city: "Lucknow", isActive: true },
//   { id: 12, name: "User12", age: 32, city: "Nagpur", isActive: false },
//   { id: 13, name: "User13", age: 33, city: "Indore", isActive: true },
//   { id: 14, name: "User14", age: 34, city: "Bhopal", isActive: false },
//   { id: 15, name: "User15", age: 35, city: "Patna", isActive: true },
//   { id: 16, name: "User16", age: 36, city: "Chandigarh", isActive: false },
//   { id: 17, name: "User17", age: 37, city: "Kanpur", isActive: true },
//   { id: 18, name: "User18", age: 38, city: "Vadodara", isActive: false },
//   { id: 19, name: "User19", age: 39, city: "Ranchi", isActive: true },
//   { id: 20, name: "User20", age: 40, city: "Coimbatore", isActive: false },
//   { id: 21, name: "User21", age: 41, city: "Mysore", isActive: true }
// ];
