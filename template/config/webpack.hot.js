var webpack = require('webpack')
var nodePath = require('path')
var webpackConfig = require('./webpack.base')({
    entry: ['webpack-hot-middleware/client', './dev'],
    devtool: 'cheap-module-eval-source-map',
    externals: require('./dev-externals'),
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
