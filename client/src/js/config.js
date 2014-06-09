requirejs.config({

	baseUrl: '/static/js',

	paths: {
		jquery: 'libs/jquery/dist/jquery',

		angular: 'libs/angular/angular',
		'angular-resource': 'libs/angular-resource/angular-resource',
		'angular-route': 'libs/angular-route/angular-route',
		'angular.ui.router': 'libs/angular-ui-router/release/angular-ui-router',
		'angular.ui.bootstrap': 'libs/angular-bootstrap/ui-bootstrap',
		'angular.ui.bootstrap-tpls': 'libs/angular-bootstrap/ui-bootstrap-tpls',

		domReady: 'libs/requirejs-domready/domReady',
		text: 'libs/requirejs-text/text'
	},

	shim: {
		angular: {
			deps: ['jquery'],
			exports: 'angular'
		},
		'angular-resource': {
			deps: ['angular']
		},
		'angular-route': {
			deps: ['angular']
		},
		'angular.ui.router': {
			deps: ['angular']
		},
		'angular.ui.bootstrap': {
			deps: ['angular']
		},
		'angular.ui.bootstrap-tpls': {
			deps: ['angular.ui.bootstrap']
		}
	},

	deps: [
		'text'
	],

	priority: ['angular']

});

window.Goldsmith || (window.Goldsmith = {});