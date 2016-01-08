module.exports = {
  compass : {
    // compile ---------------------------------------------------
    css_common: {
      options: {
        sassDir    : './scss/lib',
        cssDir     : '../public/css/lib',
        outputStyle: 'expanded',
        noLineComments : true
      }
    },
    css_sample: {
      options: {
        sassDir: './scss/_sample',
        cssDir: '../sample/css',
        outputStyle: 'expanded',
        noLineComments: true
      }
    }
  }
};
