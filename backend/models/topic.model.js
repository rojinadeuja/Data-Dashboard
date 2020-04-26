const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/yelp_database')
const Schema = mongoose.Schema;

const dataSchema = new Schema({});
const dataModel = mongoose.model('topic', dataSchema, 'topic') //mongoose.model('modelName', dataSchema, 'collectionName')

module.exports = dataModel;