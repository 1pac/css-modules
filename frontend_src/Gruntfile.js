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

  // Default
  // ---------------------------------------------------
  grunt.registerTask('default',    [ 'css'/*, 'js'*/ ]);

  // CSS
  // ---------------------------------------------------
  grunt.registerTask('css',        [ 'sass' ]);
  grunt.registerTask('css_shared', [ 'sass:css_shared' ]);
  grunt.registerTask('css_sample', [ 'sass:css_sample' ]);

  // JS
  // ---------------------------------------------------
  //grunt.registerTask('js',         [ 'requirejs', 'concat', 'uglify', 'copy', 'clean' ]);
  //grunt.registerTask('js_debug',   [ 'concat', 'uglify', 'copy', 'clean' ]);

};
