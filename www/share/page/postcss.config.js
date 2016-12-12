'use strict';

module.exports = {
  plugins: {
    'precss': {},
    'autoprefixer': {
      browsers: [
        'last 1 versions',
        'ie >= 11',
        'safari >= 9',
        'ios >= 9',
        'android >= 5'
      ]
    }
  }
};
