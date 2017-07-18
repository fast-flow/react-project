var webpack = require('webpack')
var path = require('path')
var glob = require('glob')
var userConfig = require('../config.js')
var onlineEntry = glob.sync(userConfig.webpackEntry)
var onlineEntryMap = {}
onlineEntry.forEach(function (path) {
    onlineEntryMap[path.replace(/\.js$/,'')] = './' + path
})
var FastUglifyJsPlugin = require('fast-uglifyjs-plugin')

var getConfig  = function (settings) {
    settings = settings || {}
    var uglifyPlugin = []
    if (!settings.debug) {
        uglifyPlugin.push(
            new FastUglifyJsPlugin({
                fromString: true,
                compress: {
                    unused: false,
                    warnings: false,
                    screw_ie8: false
                },
                mangle: {
                    screw_ie8: false
                },
                output: {
                    screw_ie8: false
                },
                // set debug as true to output detail cache information
                debug: true,
                // enable cache by default to improve uglify performance. set false to turn it off
                cache: true,
                // root directory is the default cache path. it can be configured by following setting
                cacheFolder: path.resolve(__dirname, '../', '.fast_uglify_cache'),
                // num of worker process default ,os.cpus().length
                workerNum: require('os').cpus().length
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
