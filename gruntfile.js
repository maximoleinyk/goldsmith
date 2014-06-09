/*global module*/
module.exports = function (grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		clean: {
			dist: 'dist',
			temp: 'temp'
		},

		eslint: {
			target: {
				src: ['client/src/js/app/**/*.js', 'client/src/js/etc/**/*.js']
			},
			options: {
				config: 'eslint.json'
			}
		},

		jscs: {
			src: "client/src/js/app/**/*.js",
			options: {
				config: ".jscs.json"
			}
		},

		less: {
			compile: {
				options: {
					cleancss: true,
					modifyVars: {
						'img-path': '"../assets/img"',
						'icon-font-path': '"../assets/fonts"',
						'fa-font-path': '"../assets/fonts"'
					}
				},
				files: {
					'client/src/css/main.css': 'client/src/css/main.less'
				}
			}
		},

		copy: {
			temp: {
				files: [
					{
						expand: true,
						src: ['**'],
						cwd: 'client/src/js',
						dest: 'temp/js'
					}
				]
			},
			css: {
				files: [
					{
						expand: true,
						src: ['**/main.css'],
						cwd: 'client/src/css',
						dest: 'dist/client/css'
					}
				]
			},
			assets: {
				files: [
					{
						expand: true,
						src: ['**'],
						cwd: 'client/src/assets',
						dest: 'dist/client/assets'
					}
				]
			},
			js: {
				files: [
					{
						expand: true,
						src: ['**/require.js'],
						cwd: 'temp/built/js/libs/requirejs',
						dest: 'dist/client/js'
					},
					{
						expand: true,
						src: ['**/config.js'],
						cwd: 'temp/built/js',
						dest: 'dist/client/js/app'
					},
					{
						expand: true,
						src: [
							'**/landing/main.js'
						],
						cwd: 'temp/built/js/app',
						dest: 'dist/client/js/app'
					}
				]
			},
			html: {
				files: [
					{
						expand: true,
						src: ['**/index.html'],
						cwd: 'client/src',
						dest: 'dist/client'
					},
					{
						expand: true,
						src: ['**/robots.txt'],
						cwd: 'client/src',
						dest: 'dist/client'
					},
					{
						expand: true,
						src: ['**/sitemap.xml'],
						cwd: 'client/src',
						dest: 'dist/client'
					}
				]
			}
		},

		ngtemplates: {
			build: {
				cwd: 'temp/js/app',
				src: '**/*.tpl.html',
				module: 'templates',
				dest: 'temp/js/app/common/templates.js',
				options: {
					prefix: 'app',
					htmlmin: {
						collapseBooleanAttributes: true,
						collapseWhitespace: true,
						removeAttributeQuotes: true,
						removeComments: true,
						removeEmptyAttributes: true,
						removeRedundantAttributes: true,
						removeScriptTypeAttributes: true,
						removeStyleLinkTypeAttributes: true
					},
					bootstrap: function (module, script) {
						return '\
                        define(["angular"], function (angular) {\
                            "use strict";\
                            var templates = angular.module("templates", []);\
                            templates.run(["$templateCache", function($templateCache) {\
                            ' + script + '\
                            }]);\
                            return templates;\
                        });';
					}
				}
			}
		},

		replace: {
			templatesPath: {
				src: 'temp/js/app/**/*.js',
				overwrite: true,
				replacements: [
					{
						from: /template:\s*require\('text!(.+)'\)/gi,
						to: 'templateUrl: \'$1\''
					}
				]
			},
			scriptsPath: {
				src: 'dist/client/index.html',
				overwrite: true,
				replacements: [
					{
						from: 'src="/static/js/libs/requirejs/require.js"',
						to: 'src="/static/js/require.js"'
					},
					{
						from: '\'/static/js/config.js\'',
						to: '\'/static/js/app/config.js\''
					}
				]
			}
		},

		requirejs: {
			app: {
				options: {
					appDir: 'temp/js',
					baseUrl: './',
					dir: 'temp/built/js/',
					mainConfigFile: 'temp/js/config.js',
					optimize: 'none',
					fileExclusionRegExp: /\.css/,
					paths: {
						'templates': 'temp/build/js/templates'
					},
					modules: [
						{
							name: 'config',
							include: [
								'jquery',
								'angular',
								'angular-resource',
								'angular-route',
								'domReady'
							]
						},
						{
							name: 'app/landing/main',
							exclude: [
								'config'
							]
						}
					]
				}
			}
		},

		uglify: {
			compile: {
				files: {
					'dist/client/js/require.js': 'dist/client/js/require.js',
					'dist/client/js/app/config.js': 'dist/client/js/app/config.js',
					'dist/client/js/app/landing/main.js': 'dist/client/js/app/landing/main.js'
				},
				options : {
					beautify : false,
					mangle   : false
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks("grunt-jscs-checker");

	grunt.registerTask('validate', []);
	grunt.registerTask('compile', ['copy:temp', 'less', 'ngtemplates', 'replace:templatesPath']);
	grunt.registerTask('build', ['requirejs']);
	grunt.registerTask('deploy', ['copy:css', 'copy:assets', 'copy:js', 'copy:html', 'replace:scriptsPath']);
	grunt.registerTask('optimize', ['uglify', 'clean:temp']);

	grunt.registerTask('default', ['clean', 'validate', 'compile', 'build', 'deploy', 'optimize']);

};
