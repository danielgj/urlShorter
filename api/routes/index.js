var express = require('express');
var status = require('http-status');
var bodyparser = require('body-parser');
var _ = require('underscore');

module.exports = function(wagner) {
 
    var indexRouter = express.Router();

    indexRouter.use(bodyparser.json());
    indexRouter.use(bodyparser.urlencoded({ extended: false }));
    
    indexRouter.route('/')
    
    return indexRouter;
    
}