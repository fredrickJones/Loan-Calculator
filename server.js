'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = 8080;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/api/interest_rate', function(req, res) {
	var randNum = Math.floor(Math.random() * 2000) / 100;
	res.json(randNum);
	// console.log(randNum);
});










app.listen(port);