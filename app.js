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
app.use(express.static('src'));

//routing, this shit is tough. Just remember that this is the server side routes, not the client side
//client side will be handled by angular
app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname + '/src/views/index.html'));
});

app.get('/patients',function(req,res) {
    res.send('hello patients route');
});

app.get('/admin',function(req,res) {
    res.send('admin panel');
});

app.get('*', function(req, res) {
    res.send('what???', 404);
});

//this is the acutal call to the server. I fire this off by running "npm start" from a command
app.listen(port,function(err) {
    console.log('running on port: ' + port);
});