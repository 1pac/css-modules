module.exports = {
  // compile ---------------------------------------------------
  css_common: {
    options: {
      sassDir    : './scss/common',
      cssDir     : '../public/css/common',
      outputStyle: 'expanded',
      noLineComments : true
    }
  },
  css_sample: {
    options: {
      sassDir: './scss/_sample',
      cssDir: '../public/_dev/sample/css',
      outputStyle: 'expanded',
      noLineComments: true
    }
  }
};
