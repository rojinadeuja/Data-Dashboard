/*************************************************
** {A data model for the collection 'topic' from the 'yelp_database'}
**************************************************
** Author: {Rojina Deuja}
** Last Updated: {04-28-2020}
*************************************************/

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/yelp_database')
const Schema = mongoose.Schema;

// Define a blank schema since the collection already exists in the db
const dataSchema = new Schema({});
// Define the Model
const dataModel = mongoose.model('topic', dataSchema, 'topic') // mongoose.model('modelName', dataSchema, 'collectionName')
// Export the Model
module.exports = dataModel;