module.exports = function(grunt) {
	var autoprefixer = require('autoprefixer-core');
	grunt.initConfig({
		watch: {
			options: {
				livereload: false
			},
			dist: {
				files: [
					'css/input.css'
				],
				tasks: ['postcss']
			}
		},
		postcss: {
			options: {
				processors: [
					autoprefixer({
						browsers: ['> 0%','ie 8']
					}).postcss
				]
			},
			dist: {
				src: 'css/input.css',
				dest: 'css/output.css'
			}
		},
	});

	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['postcss']);
	grunt.registerTask('css', ['postcss','watch']);
};