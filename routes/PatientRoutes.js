var express = require('express');
var patientRouter = express.Router();

var patients = [{name:'wes matison',account:'OV5084567778',reason:'Pneumonia'},
                {name:'kirk hoffman',account:'OV5084567344',reason:'CHF'},
                {name:'tj temple',account:'OV5084563334',reason:'MI'},
                {name:'ez niles',account:'OV5084569089',reason:'Ischemic Stroke'},
                {name:'brenda cotter',account:'OV5084567333',reason:'Psychosis'}];
                
patientRouter.route('/')
        .get(function(req,res) {
            res.render('patients', {
                patients: patients    
            });
        });
        
patientRouter.route('/location/:id')
        .get(function(req,res) {
            res.render('location', {
                patients: patients    
            });
        });
        
module.exports = patientRouter;