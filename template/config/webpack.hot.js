var webpack = require('webpack')
var userConfig = require('../config')
var nodePath = require('path')
var webpackConfig = require('./webpack.base')({
    entry: ['webpack-hot-middleware/client', './dev'],
    devtool: 'cheap-module-eval-source-map',
    firstJsLoader: ['react-hot'],
    firstPlugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        path: nodePath.join(__dirname, '../output'),
        filename: 'dev.js',
        publicPath: '/'
    }
})
module.exports = webpackConfig
