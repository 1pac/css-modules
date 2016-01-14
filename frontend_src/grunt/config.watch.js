module.exports = {
  // watch ---------------------------------------------------
  // CSS
  watch : {
    css_common: {
      files: [
        './scss/shared/*.scss',
        './scss/shared/*/*.scss',
        './scss/lib/*.scss',
        './scss/lib/*/*.scss'
      ],
      tasks: ['css_common']
    },
    css_sample: {
      files: [
        './scss/_sample/*.scss'
      ],
      tasks: ['css_sample']
    }
  }
};
