define(function(require) {

	var module = require('app/landing/module');

	module.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider
			.when('/', {
				template: require('text!app/landing/template/app.html'),
				controller: 'MainController'
			});
	}]);
});