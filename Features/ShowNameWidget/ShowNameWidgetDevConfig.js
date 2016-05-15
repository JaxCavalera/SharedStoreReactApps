var path = require('path');

var ROOT_PATH = path.resolve(__dirname, 'Src');

var baseConfig = require('../../webpack.config.js');

baseConfig.entry = (ROOT_PATH + '\\Index.jsx');
baseConfig.output.filename = 'ShowNameWidgetBundle.js';

module.exports = baseConfig;
