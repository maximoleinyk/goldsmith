define(['app/common/module'], function(module) {
	var controller = ['$scope', function ($scope) {
		console.log('404');
	}];

	module.controller('NotFoundCtrl', controller);

	return controller;
});
