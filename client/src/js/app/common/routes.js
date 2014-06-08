define(function (require) {

	require('app/common/controllers/notFound/top');
	require('app/common/controllers/layout/top');

	var module = require('app/common/module');

	module.run(['$rootScope', '$location', function ($rootScope, $location) {
		$rootScope.$on('$routeChangeError', function (event, current, previous, error) {
			if (error.status === 404) {
				$location.path('/404');
			}
		});
	}]);

	module.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/404', {
				template: require('text!app/common/controllers/notFound/top.tpl.html'),
				controller: 'NotFoundCtrl'
			})
			.when('/', {
				template: require('text!app/common/controllers/layout/top.tpl.html'),
				controller: 'LayoutCtrl'
			});
		$locationProvider.html5Mode(true);
	}]);

});