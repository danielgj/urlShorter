var mongoose = require('mongoose');
var _ = require('underscore');

module.exports = function(wagner, config) {

  mongoose.Promise = global.Promise;
  mongoose.connect(config.db_url, {useNewUrlParser: true});

  var Url =
      mongoose.model('Url', require('./schemas/url'), 'urls');
  
  var models = {
    Url: Url
  }
  
   // To ensure DRY-ness, register factories in a loop
  _.each(models, function(value, key) {
    wagner.factory(key, function() {
      return value;
    });
  });

  return models;
};