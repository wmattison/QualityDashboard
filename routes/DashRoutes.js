var express = require('express');
var dashRouter = express.Router();
                
dashRouter.route('/')
        .get(function(req,res) {
            res.render('dashlight/dashboard.html');
        });
        
dashRouter.route('/dashboard')
        .get(function(req,res) {
            res.render('dashlight/dashboard.html');
        });
		
dashRouter.route('/user')
        .get(function(req,res) {
            res.render('dashlight/user.html');
        });
        
dashRouter.route('/table')
        .get(function(req,res) {
            res.render('dashlight/table.html');
        });
        
dashRouter.route('/typography')
        .get(function(req,res) {
            res.render('dashlight/typography.html');
        });
        
dashRouter.route('/icons')
        .get(function(req,res) {
            res.render('dashlight/icons.html');
        });
        
dashRouter.route('/maps')
        .get(function(req,res) {
            res.render('dashlight/maps.html');
        });
        
dashRouter.route('/notifications')
        .get(function(req,res) {
            res.render('dashlight/notifications.html');
        });
        
module.exports = dashRouter;