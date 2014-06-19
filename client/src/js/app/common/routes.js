define(function (require) {

	var module = require('app/common/module');

	module.config(['$stateProvider', '$locationProvider', function ($stateProvider, $locationProvider) {
		$stateProvider
			.state('404', {
				template: require('text!app/common/controllers/notFound/top.tpl.html'),
				controller: require('app/common/controllers/notFound/top')
			})
			.state('page', {
				abstract: true,
				template: require('text!app/common/controllers/layout/top.tpl.html')
			});

		// Enable support for push state
		$locationProvider.html5Mode(true);
	}]);
});