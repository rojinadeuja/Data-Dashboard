/*************************************************
** {A Node.js web server for our web application}
**************************************************
** Author: {Rojina Deuja}
** Last Updated: {04-28-2020}
*************************************************/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const topicRoutes = express.Router();

// Import the required data models
let Topic = require('./models/topic.model');

app.use(cors());
app.use(bodyParser.json());

// Create connection to the database
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

 // Set up GET request for route
 topicRoutes.route('/topic_list').get(function(req, res) {
    Topic.find(function(err, topics) {
        if(err){ 
            console.log(err);
         }
         else{
             res.json(topics);
         }
     });
 });

 // Set up GET request for route
 topicRoutes.route('/topic_details').get(function(req, res) {
    Topic.find(function(err, topics) {
        if(err){ 
            console.log(err);
         }
         else{
             res.json(topics);
         }
     });
 });

 // This works as a middleware. It will take care of api requests and paths.
app.use('/topics', topicRoutes) 

// Set up port to listen on
app.listen(4000, function(){
    console.log("Listening on 4000")
})