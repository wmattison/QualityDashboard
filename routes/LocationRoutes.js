var express = require('express');
var locationRouter = express.Router();

var locations = [{name:'2 North',abbr:'2NOR'},
                {name:'2 South',abbr:'2SOU'},
                {name:'Intensive Care Unit',abbr:'ICU'},
                {name:'1st Floor',abbr:'FF'},
                {name:'Neuropsych',abbr:'NPU'},
                {name:'Obstetrics/Gynocology',abbr:'OBGYN'}];
                
locationRouter.route('/')
        .get(function(req,res) {
            res.render('locations', {
                locations: locations    
            });
        });
        
locationRouter.route('/:location')
        .get(function(req,res) {
            res.render('location', {
                locations: locations    
            });
        });
        
module.exports = locationRouter;