module.exports = function (grunt) {

grunt.initConfig({
	express: {
	  default_option: {}
	}
});

grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-express');

grunt.registerTask('default', ['express']);

};