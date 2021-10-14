const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'news-api'

MongoClient.connect(connectionURL,{useNewUrlParser:true}).then(client=>{
      console.log('connected...')
      const db = client.db(databaseName)
      db.collection('newsData').insertOne({
          name:"Misti",
          age:3
      },(error,result) => {
          if(error){
              return console.log('Unable to insert the documents')
          }
          //console.log(result.ops)
      })
}).catch(error => console.log('Unable to connect to database'))