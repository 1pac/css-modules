module.exports = {
  // watch ---------------------------------------------------
  // CSS
  watch : {

    // lib ------------------------------------------------
    css_lib: {
      files: [
        './scss/lib/*.scss',
        './scss/lib/*/*.scss'
      ],
      tasks: ['css_shared', 'css_sample']
    },

    // shared ------------------------------------------------
    css_shared: {
      files: [
        './scss/shared/*.scss',
        './scss/shared/*/*.scss'
      ],
      tasks: ['css_shared']
    },

    // sample ------------------------------------------------
    css_sample: {
      files: [
        './scss/_sample/*.scss'
      ],
      tasks: ['css_sample']
    }
  }
};
