module.exports = {
  // watch ---------------------------------------------------
  // CSS
  watch : {
    css_shared: {
      files: [
        './scss/lib/*.scss',
        './scss/lib/*/*.scss',
        './scss/shared/*.scss',
        './scss/shared/*/*.scss'
      ],
      tasks: ['css_shared']
    },
    css_sample: {
      files: [
        './scss/_sample/*.scss'
      ],
      tasks: ['css_sample']
    }
  }
};
