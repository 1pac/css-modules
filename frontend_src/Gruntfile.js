module.exports = function (grunt) {
  var configObject = require('./grunt/config');
  var PACKAGE_JSON = grunt.file.readJSON("package.json");
  grunt.config.init(configObject);
  // Load Grunt Plugins
  Object.keys(PACKAGE_JSON.devDependencies).map(function(name){
    if(name.match('grunt-')){
      grunt.loadNpmTasks(name);
    }
  });

  /*
   * Grunt Tasks
   */
  // ALL
  grunt.registerTask('default', [
    'css',
    //'js'
  ]);

  // CSS
  grunt.registerTask('css', [
    'compass'
  ]);

  grunt.registerTask('css_common', [
    'compass:css_common'
  ]);

  grunt.registerTask('css_sample', [
    'compass:css_sample'
  ]);

};
