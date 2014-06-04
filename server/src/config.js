path = require('path');

module.exports = {
	server: {
		listenPort: 3000,
		securePort: 8433,
		distFolder: path.resolve(__dirname, '../../dist'),
		sourceFolder: path.resolve(__dirname, '../../client/src'),
		staticUrl: '/static',
		cookieSecret: 'secret'
	}
};