module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			sass: {
				files: ["**/*.scss"],
				tasks: ['sass']
			}
		},
		sass:{
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'public/styles/css/bootstrap.css': 'public/styles/scss/bootstrap/bootstrap.scss',
					'public/styles/css/custom.css': 'public/styles/scss/custom.scss'
				}
			}
		},
		bowercopy: {
			bootstrap: {
				files: {
					'public/scripts/vendor/bootstrap.js': 'bootstrap-sass/dist/js/bootstrap.min.js',
					'public/styles/scss/bootstrap/': 'bootstrap-sass/lib/'
				}
			},
			jquery: {
				files: {
					'public/scripts/vendor/jquery.js': 'jquery/jquery.js'
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-bowercopy');

	grunt.registerTask('init', [ 'bowercopy', 'sass' ]);
	grunt.registerTask('default', ['sass']);
};