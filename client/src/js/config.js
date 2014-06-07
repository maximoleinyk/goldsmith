requirejs.config({

	baseUrl: '/static/js',

	paths: {
		jquery: 'libs/jquery/dist/jquery',
		angular: 'libs/angular/angular',
		'angular-resource': 'libs/angular-resource/angular-resource',
		'angular-route': 'libs/angular-route/angular-route',
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
		}
	},

	deps: [
		'text'
	],

	priority: ['angular']

});

window.Goldsmith || (window.Goldsmith = {});