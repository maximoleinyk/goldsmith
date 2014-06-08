define([
	'app/common/module',
	'text!app/common/controllers/notFound/top.tpl.html',
	'app/common/controllers/notFound/top'
], function (module, notFoundTpl) {

	module.run(['$rootScope', '$location', function ($rootScope, $location) {
		window.debug = $location;
		$rootScope.$on('$routeChangeError', function (event, current, previous, error) {
			if (error.status === 404) {
				$location.path('/404');
			}
		});
	}]);

	module.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/404', {
				template: notFoundTpl,
				controller: 'NotFoundCtrl'
			});
		$locationProvider.html5Mode(true);
	}]);

});