var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var urlSchema = {
    url: {
      type: String,
      required: true
    }
};

var schema = new mongoose.Schema(urlSchema, {timestamps: true});

module.exports = schema;
module.exports.urlSchema = urlSchema;
