define(function (require) {

	require('app/common/routes');

	var module = require('app/landing/module');

	module.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			.state('page.home', {
				url: '/',
				views: {
					nav: {
						template: 'Header'
					},
					body: {
						template: require('text!app/landing/controllers/home/top.tpl.html')
					}
				}
			});
	}]);
});