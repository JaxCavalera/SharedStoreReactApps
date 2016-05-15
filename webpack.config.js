var path = require('path');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

var ROOT_PATH = path.resolve(__dirname, 'Features');
var BUILD_PATH = path.resolve(ROOT_PATH, '../ThirdPartySite/js');

module.exports = {
    entry: '',
    output: {
        path: BUILD_PATH,
        filename: 'Bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/, // scan for js and jsx files only
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    "presets": ["es2015", "react"],
                    "ignore": ["/node_modules/"],
                }
            },
            {
                test: /\.css$/, // scan for css files only
                loaders: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.png$/,
                loader: 'url?limit=100000&mimetype=image/png',
                exclude: /node_modules/,
            },
            {
                test: /\.jpg$/,
                loader: 'file',
                exclude: /node_modules/,
            }
        ]
    },
    postcss: function() {
        return [autoprefixer({browsers: ['> 0.8%']}), precss];
    },
    plugins: []
};
