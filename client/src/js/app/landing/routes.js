define([
	'app/landing/module',
	'text!app/landing/controllers/layout/top.tpl.html',
	'app/common/routes',
	'app/landing/controllers/layout/top'
], function (module, notFountTpl) {
	module.config(['$routeProvider', '$locationProvider', function ($routeProvider) {
		$routeProvider
			.when('/', {
				template: notFountTpl,
				controller: 'LayoutCtrl'
			});
	}]);
});