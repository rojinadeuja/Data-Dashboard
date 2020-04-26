const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const url ='mongodb://127.0.0.1:27017';
const dbName = 'yelp_database'

MongoClient.connect(url, { useNewUrlParser: true }).then( client =>{
    const db = client.db(dbName)
    console.log(`Connected MongoDB: ${url}`)
    console.log(`Database: ${dbName}`)
    const quotesCollection = db.collection('quotes')

// app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('public'))

app.listen(4000, function(){
    console.log("Listening on 4000")
})

// All handlers here
app.get('/', (req, res) => {
    res.send('Backend Home') //(__dirname + '/index.js')
})

// app.post('/businesses', (req, res) => {
//     quotesCollection.insertOne(req.body)
//     .then(result => {
//         res.redirect('/')
//     })
//     .catch(error=> console.error(error))
//   })
// })
// .catch(console.error)