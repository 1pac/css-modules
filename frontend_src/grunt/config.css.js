module.exports = {
  sass : {

    // shared ------------------------------------------------
    css_shared: {
      options: {
        sourcemap: 'none',
        style: 'expanded' //or 'compressed'
      },
      files: [{
        expand: true,
        cwd: './scss/shared',
        src: ['*.scss'],
        dest: '../public/css/shared',
        ext: '.css',
        extDot: 'last'
      }]
    },

    // sample ------------------------------------------------
    css_sample: {
      options: {
        sourcemap: 'none',
        style: 'expanded' //or 'compressed'
      },
      files: [{
        expand: true,
        cwd: './scss/_sample',
        src: ['*.scss'],
        dest: '../sample/css',
        ext: '.css',
        extDot: 'last'
      }]
    }

  }
};
