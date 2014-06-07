define(['app/landing/module'], function(module) {
	module.controller('MainController', ['$scope', function($scope) {
		$scope.model = {
			message: 'Welcome page'
		}
	}]);
});