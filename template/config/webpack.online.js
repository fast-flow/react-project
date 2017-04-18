var webpack = require('webpack')
var path = require('path')
var glob = require('glob')
var userConfig = require('../config.js')
var onlineEntry = glob.sync(userConfig.webpackEntry)
var onlineEntryMap = {}
onlineEntry.forEach(function (path) {
    onlineEntryMap[path.replace(/\.js$/,'')] = './' + path
})

var getConfig  = function (settings) {
    settings = settings || {}
    var uglifyPlugin = []
    if (!settings.debug) {
        uglifyPlugin.push(
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
        )
    }
    return require('./webpack.base')({
        externals: userConfig.webpackExternals,
        entry: onlineEntryMap,
        devtool: 'source-map',
        lastPlugins: [
           new webpack.DefinePlugin({
               'process.env.NODE_ENV': JSON.stringify('production')
           })
        ].concat(uglifyPlugin)
        ,
        output: {
            path: path.join(__dirname, '../output'),
            filename: '[name].js',
            publicPath: userConfig.domain,
            chunkFilename: '__chunk/[name]-[id]-[hash]-chunk.js'
        }
    })
}
module.exports = getConfig()
module.exports.getConfig = getConfig
