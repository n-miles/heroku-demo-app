var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 8090));
app.use(express.static('static'));

app.post('/start.xml', function(req, res){
	res.sendFile(path.join(__dirname, 'static/start.xml'));
	console.log("Got request");
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});