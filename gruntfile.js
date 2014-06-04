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
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.registerTask('default', ['clean', 'less']);

};
