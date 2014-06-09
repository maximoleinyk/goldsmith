define(['angular', 'angular-route', 'angular-resource', 'app/common/templates'], function (angular) {
	var module = angular.module('common', ['templates', 'ngRoute', 'ngResource']);

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