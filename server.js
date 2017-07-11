var express = require('express');
var app = express();
var path = require('path');

// if it's on Heroku, the PORT environment variable will be set. Otherwise use 8090
app.set('port', (process.env.PORT || 8090));

// GET requests serve static content
app.use(express.static('static'));

// handle POST requests to {domain}/start.xml
app.post('/start.xml', function(req, res){
	res.sendFile(path.join(__dirname, 'static/start.xml'));
});

// start server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
