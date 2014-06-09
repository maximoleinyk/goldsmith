path = require('path');

var config = {
	server: {
		listenPort: 3000,
		securePort: 8433,
		sourceFolder: path.resolve(__dirname, '../../client/src'),
		staticUrl: '/static',
		cookieSecret: 'secret'
	}
};

if (process.env.NODE_ENV === 'production') {
	config.server.sourceFolder = path.resolve(__dirname, '../../dist/client');
}

module.exports = config;