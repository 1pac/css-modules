var _ = require('lodash');
var config = {};

/*
 CSS
 */
config = _.merge(config, require('./config.css.js'));

/*
 Watch
 */
config = _.merge(config, require('./config.watch.js'));

module.exports = config;
