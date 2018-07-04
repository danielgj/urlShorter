var express = require('express');
var status = require('http-status');
var bodyparser = require('body-parser');
var _ = require('underscore');

module.exports = function(wagner) {
 
    var indexRouter = express.Router();

    indexRouter.use(bodyparser.json());
    indexRouter.use(bodyparser.urlencoded({ extended: false }));
    
    indexRouter.route('/')
    
    .get(function(req, res) {        
        
      res.render('index', { title:  'Acortador de URLS'});
        
    })

    .post(function(req, res) {

        var bodyReq = req.body;

        if(!bodyReq || !_.has(bodyReq,'url')) {
            return res.status(400).send({ msg: 'Bad request' });
        } else {
            wagner.invoke((Url) => {

                return Url.create({url: bodyReq.url})
                    .catch((err) => {
                        return res.status(500).json({ msg: "internal_server_error" });
                    })
                    .then((data) => {
                        return res.status(201).json(data);
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
                        res.render('error', { message:  'URL no encontrada', error: {status: 404}});
                    } else {
                        return res.status(301).redirect(data.url);
                    }

                })
                .catch((err) => {
                    res.render('error', { message:  'Internal Server Error', error: {status: 500}});
                });                                                       
      
        });

        
          
    });
    
    return indexRouter;
    
}