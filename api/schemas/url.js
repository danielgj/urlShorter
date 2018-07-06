var mongoose = require('mongoose');
var configParams = require('../config/config')();
var autoIncrement = require('mongoose-auto-increment');

mongoose.Promise = global.Promise;
var connection = mongoose.createConnection(configParams.db_url, {useNewUrlParser: true});

autoIncrement.initialize(connection);

var urlSchema = {
    url: {
      type: String,
      required: true
    }
};

var schema = new mongoose.Schema(urlSchema, {timestamps: true});
schema.plugin(autoIncrement.plugin, 'Url');

module.exports = schema;
module.exports.urlSchema = urlSchema;
