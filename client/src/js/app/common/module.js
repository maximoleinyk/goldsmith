define(function (require) {

	require('angular-resource');
	require('angular-route');
	require('angular.ui.router');
	require('angular.ui.bootstrap');
	require('angular.ui.bootstrap-tpls');
	require('app/common/templates');

	var angular = require('angular'),
		module = angular.module('common', [
			'ui.router',
			'ui.bootstrap',
			'templates',
			'ngRoute',
			'ngResource'
		]);

	module.config(['$provide', function ($provide) {
		$provide.decorator('$rootScope', ['$delegate', function ($delegate) {
			$delegate.constructor.prototype.$onRootScope = function (name, listener) {
				var unsubscribe = $delegate.$on(name, listener);

				this.$on('$destroy', unsubscribe);

				return unsubscribe;
			};
			return $delegate;
		}]);
	}]);

	return module;
});