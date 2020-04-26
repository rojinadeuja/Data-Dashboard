const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const topicRoutes = express.Router();

let Topic = require('./models/topic.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/yelp_database', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

topicRoutes.route('/').get(function(req, res) {
    Topic.find(function(err, topics) {
        if(err){ 
            console.log(err);
         }
         else{
             res.json(topics);
         }
     });
 });

app.use('/topics', topicRoutes) //It works as a middleware. It will take care of api requests and paths.

app.listen(4000, function(){
    console.log("Listening on 4000")
})