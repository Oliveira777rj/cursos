const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/mongoMaestria'

const client = new MongoClient(uri)

async function run(){

  try {
    await client.connect()
    console.log('conectando ao mongoDB!')
  } catch (error) {
    console.log(error)
  }
}
run()
module.exports = client