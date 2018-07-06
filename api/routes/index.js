var express = require('express');
var status = require('http-status');
var bodyparser = require('body-parser');
var _ = require('underscore');

module.exports = function(wagner, config) {
 
    var indexRouter = express.Router();

    indexRouter.use(bodyparser.json());
    indexRouter.use(bodyparser.urlencoded({ extended: false }));
    
    indexRouter.route('/')
    
    .get(function(req, res) {        
        
      return res.render('index', { title:  'Acortador de URLS'});
        
    })

    .post(function(req, res) {

        var bodyReq = req.body;

        if(!bodyReq || !_.has(bodyReq,'url')) {
            return res.status(400).send({ msg: 'Bad request' });
        } else {
            wagner.invoke((Url) => {

                Url.findOne({url: bodyReq.url})
                .then((data) => {

                    if(!data) {
                        //URL doesn't exist in DB so we create it
                        Url.create({url: bodyReq.url})
                            .catch((err) => {
                                return res.status(500).json({ msg: "internal_server_error" });
                            })
                            .then((data) => {

                                var newUrl = {
                                    url: data.url,
                                    shortedUrl: data._id.toString(36)
                                }

                                return res.status(201).json(newUrl);
                            });

                    } else {
                        //URL exists in DB so we return it
                        var newUrl = {
                            url: data.url,
                            shortedUrl: data._id.toString(36)
                        }

                        return res.status(201).json(newUrl);
                    }

                })
                .catch((err) => {
                    return res.render('error', { message:  'Internal Server Error', error: {status: 500}});
                });     
                
            });
        }

    })

    indexRouter.route('/:id')

    .get(function(req, res) {   
        
        wagner.invoke((Url) => {
                    
            Url.findOne({_id: req.params.id})
                .then((data) => {

                    if(!data) {
                        return res.render('error', { message:  'URL no encontrada', error: {status: 404}});
                    } else {
                        return res.status(301).redirect(data.url);
                    }

                })
                .catch((err) => {
                    return res.render('error', { message:  'Internal Server Error', error: {status: 500}});
                });                                                       
      
        });

        
          
    });
    
    return indexRouter;
    
}