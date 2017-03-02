var webpack = require('webpack')
var nodePath = require('path')
var Es3ifyPlugin = require('es3ify-webpack-plugin')
var webpackConfig = require('./webpack.base')({
    entry: ['./dev'],
    devtool: 'source-map',
    lastPlugins: [
       new Es3ifyPlugin()
    ],
    output: {
        path: nodePath.join(__dirname, '../output'),
        filename: 'dev.js',
        publicPath: '/'
    }
})
module.exports = webpackConfig
