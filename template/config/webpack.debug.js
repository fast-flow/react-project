var webpack = require('webpack')
var nodePath = require('path')
var webpackConfig = require('./webpack.base')({
    entry: ['./dev'],
    devtool: 'source-map',
    firstPostLoaders: [
        { test: /\.js$/, loader: 'es3ify' }
    ],
    output: {
        path: nodePath.join(__dirname, '../output'),
        filename: 'dev.js',
        publicPath: '/'
    }
})
module.exports = webpackConfig
