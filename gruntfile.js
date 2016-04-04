module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      target: {
        files: {
          'css/style.css': 'less/style.less'
        }
      }
    },
    watch: {
      target: {
        files: 'css/style.css',
        tasks: ['less']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  grunt.registerTask('default', ['less', 'watch']);
};