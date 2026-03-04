// schema validation happens on db level like mongoose


const { MongoClient, Collection } = require('mongodb');
const env = require('dotenv')
env.config()
const url = process.env.DB_URL;

const client = new MongoClient(url);
async function main() {
    try {
        await client.connect();
        const db = client.db('schemaValidationPractice')
        await db.createCollection('user', {
            validator: {
                $jsonSchema: {
                    required: ["name", "age"],
                    properties: {
                        name: {
                            bsonType: "string"
                        },
                        age: {
                            bsonType: "int",
                            minimum: 0
                        }
                    }
                },

            }
        })


          const userCollection=db.collection('user')
           const data= await userCollection.insertOne({name:"kirti",age:12, game:"cricket"})
           console.log(data)

        //    const data=await db.listCollections({name:"user"}).toArray()
        //    console.log("🚀 ~ main ~ data:", data)

    } catch (error) {
        console.log(error)
    }

}


main()