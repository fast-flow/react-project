var webpack = require('webpack')
var path = require('path')
var glob = require('glob')
var userConfig = require('../config.js')
var onlineEntry = glob.sync(userConfig.webpackEntry)
var onlineEntryMap = {}
onlineEntry.forEach(function (path) {
    onlineEntryMap[path.replace(/\.js$/,'')] = './' + path
})

var webpackConfig = require('./webpack.base')({
    externals: userConfig.webpackExternals,
    entry: onlineEntryMap,
    lastPlugins: [
       new webpack.DefinePlugin({
           'process.env.NODE_ENV': JSON.stringify('production')
       }),
       new webpack.optimize.UglifyJsPlugin({
           fromString: true,
           compress: {
               warnings: false,
               screw_ie8: false
           },
           mangle: {
               screw_ie8: false
           },
           output: {
               screw_ie8: false
           }
       })
    ],
    output: {
        path: path.join(__dirname, '../output'),
        filename: '[name].js',
        publicPath: userConfig.domain,
        chunkFilename: '__chunk/[name]-[id]-[hash]-chunk.js'
    }
})
module.exports = webpackConfig
