if (process.env.NODE_ENV === 'development') {
	require('dotenv').load();
}

var restify = require('restify');
restify.CORS.ALLOW_HEADERS.push('authorization');
restify.CORS.ALLOW_HEADERS.push('Access-Control-Allow-Origin');

var Twit = require('twit');
var twitter = new Twit({
	consumer_key: process.env.OAUTH_KEY,
	consumer_secret: process.env.OAUTH_SECRET,
	app_only_auth: true
});

var server = restify.createServer();
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());

// anonymous function to print routes coming in
// TODO: log these instead of printing
server.use(function logger(req,res,next) {
	console.log(new Date(),req.method,req.url);
	next();
});

// Beanstalk Health Check
server.get('/health', function (req, res) {
	res.send(200);
});

// Require routes for resources from App
require("./src/api/twitter")(server, twitter);

// default route to serve index
server.get('/', restify.serveStatic({
	directory: './public',
	default: 'index.html'
}));
// js, css, html files
server.get('/.*/', restify.serveStatic({
	directory: './public'
}));


// start server
var host = process.env.HOST || "127.0.0.1";
var port = process.env.PORT || 3000;
server.listen(port, host, function () {
	console.log("server starting at ", server.name, server.url, " on ", port);
});
