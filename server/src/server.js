var express = require('express'),
	config = require('./config.js'),
	protectJSON = require('./util/protectJSON'),app = express(),
	server = require('http').createServer(app);

// Security
app.use(protectJSON);

// Logging
app.use(express.logger());

// Cookies
app.use(express.bodyParser());
app.use(express.cookieParser(config.server.cookieSecret));
app.use(express.cookieSession());

// Error handling
app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

// Static
app.use(express.favicon(config.server.sourceFolder + '/assets/favicon.ico'));
app.use(config.server.staticUrl, express.compress());
app.use(config.server.staticUrl, express.static(config.server.sourceFolder));
app.use(config.server.staticUrl, function (req, res, next) {
	res.send(404);
});

// Routers
require('./routes/files').addRoutes(app, config);

// Start listening
server.listen(config.server.listenPort, '0.0.0.0', 511, function () {
	console.log('http://localhost:' + config.server.listenPort);
});
