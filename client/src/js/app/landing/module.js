define(['angular', 'angular-route', 'angular-resource'], function(angular) {
	var app = angular.module('app', ['ngRoute', 'ngResource']);

	app.run(function() {
		console.log('Application started');
	});

	return app;
});