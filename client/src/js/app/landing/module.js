define(['angular', 'app/common/module'], function(angular) {
	var module = angular.module('landing', ['common']);

	module.run(['$state', function($state) {
		$state.go('page.home');
	}]);

	return module;
});