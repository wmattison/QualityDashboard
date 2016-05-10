var express = require('express');
//this is the middleware that gives you the __dirname variable
var path = require('path');

//initiates the express app
var app = express();

//just a variable to set the port
var port = process.env.PORT || 5000;

//express static allows you to serve statuc files from the folders mentioned, like css and javascript, or
//like you know your whole website
app.use(express.static('public'));
app.use(express.static('client'));

//setting the viewengine here, this will affect the res.render calls from routes
app.set('views', __dirname + '/client/views');
app.set('view engine', 'pug');

//routing, this shit is tough. Just remember that this is the server side routes, not the client side
//client side will be handled by angular
var patientRouter = require('./routes/PatientRoutes.js');
app.use('/patients',patientRouter);

var locationRouter = require('./routes/LocationRoutes.js');
app.use('/locations',locationRouter);

app.get('*', function(req, res) {
    res.render('404');
});

//this is the acutal call to the server. I fire this off by running "npm start" from a command
app.listen(port,function(err) {
    console.log('running on port: ' + port);
});