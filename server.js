require('newrelic');
var express = require('express');
var app = express();

// set the favicon
// var favicon = require('serve-favicon');
app.use(express.favicon(__dirname + '/lib/images/favicon.ico'));

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/lib'));

// set the home page route
app.get('/', function(req, res) {

	// ejs render automatically looks in the views folder
	res.render('index');
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});
