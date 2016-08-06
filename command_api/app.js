var express = require('express');
var app = express();

var commandAPI = require('./command_api');
var commandParser = require('./command_parser')(commandAPI);

app.get('/command', function (req, res) {
	console.log(req.query.command);
	commandParser.executeCommand(req.query.command).then(function(result) {
		console.log('app:' + result);
		res.send(result);
	}, function(error) {
		res.send(error);
	});
  	
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});