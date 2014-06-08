/*global module*/
module.exports = function (grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		clean: {
			dist: 'dist'
		},

		eslint: {
			target: {
				src: ['client/src/js/app/**/*.js', 'client/src/js/etc/**/*.js']
			},
			options: {
				config: 'eslint.json'
			}
		},

		less: {
			compile: {
				options: {
					cleancss: true,
					modifyVars: {
						'img-path': '"../assets/img/"',
						'icon-font-path': '"../assets/fonts/"',
						'fa-font-path': '"../assets/fonts/"'
					}
				},
				files: {
					'client/src/css/main.css': 'client/src/css/main.less'
				}
			}
		},

		html2js: {
			options: {
				htmlmin: {
					collapseBooleanAttributes: true,
					collapseWhitespace: true,
					removeAttributeQuotes: true,
					removeComments: true,
					removeEmptyAttributes: true,
					removeRedundantAttributes: true,
					removeScriptTypeAttributes: true,
					removeStyleLinkTypeAttributes: true
				}
			},
			main: {
				src: ['temp/js/**/*.html'],
				module: '',
				dest: 'temp/js/templates.js'
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
			}
		}

	});

	grunt.loadNpmTasks('grunt-html2js');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['clean', 'less']);

};
