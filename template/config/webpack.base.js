var colors = require('colors');
var userConfig = require('../config')
var localConfig = require('../local-config')
var config = require('./getConfig')()
var path = require('path');
var webpack = require('webpack');
var extend = require('extend')
var minimatch = require('minimatch')
var notifier = require('node-notifier')
var matchRequest = function (globs, request) {
    return globs.some(function (glob) {
        if (minimatch(request, glob)) {
            return true
        }
        return false
    })
}
var doNotCompileList = []
/**
 * @param {array|object} settings.entry - 入口文件
 * @param {string} settings.devtool - webpack config devtool
 * @param {array} settings.firstJsLoader  - *.js 最先执行的loader
 * @param {array} settings.lastJsLoader  - *.js 最后执行的loader
 * @param {array} settings.firstPlugins - 最先执行的 plugins
 * @param {array} settings.lastPlugins - 最后执行的 plugins
 * @param {object} settings.output - webpack output 配置
 */
module.exports = function (settings) {
    settings.externals
    settings = extend(true, {
        devtool: '',
        entry: [],
        firstJsLoader: [],
        lastJsLoader: [],
        firstPlugins: [],
        lastPlugins: [],
        externals: {}
    }, settings)
    var externals = []
    externals = externals.concat(userConfig.webpackExternals)
    externals = externals.concat([
        /^[.]+$/,
        function (context, request, callback) {
            if (request === './dev' && './dev.js') {
                return callback()
            }
            if (/node_modules/.test(context) || /node_modules/.test(request)) {
                return callback()
            }
            if (!/^\./.test(request)) {
                return callback()
            }
            var noCompile = matchRequest(localConfig.webpackNoCompile, request)
            var alwaysCompile = matchRequest(localConfig.webpackAlwaysCompile, request)

            var isCompile = true
            if (noCompile) {
                isCompile = false
            }
            // if has webpackOnlyCompile glob, other files are not compile
            if (localConfig.webpackOnlyCompile.length !== 0) {
                isCompile = matchRequest(localConfig.webpackOnlyCompile, request)
            }
            // alwaysCompile 权重最高
            if (alwaysCompile) {
                isCompile = true
            }
            if (!isCompile) {
                var message = 'Do_not_compile_' + request.red
                doNotCompileList.push(request)
                setTimeout(function () {
                    notifier.notify({
                      'title': 'local-config.js: Don\'t compile',
                      'message': doNotCompileList.join('\n')
                    })
                    console.log('local-config.js: Don\'t compile'.red)
                    console.log(doNotCompileList.join('\n').yellow)
                }, 400)
                return callback(null, 'local_config_js__' + message.replace(/[-.\/]/g,'_'))

            }
            return callback()
        },
    ])
    var output = {
        devtool: settings.devtool,
        entry: settings.entry,
        externals: externals,
        output: settings.output,
        plugins: settings.firstPlugins.concat(
            []
        ).concat(settings.lastPlugins),
        lessLoader: {
            lessPlugins: userConfig.less.plugins
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loaders: settings.firstJsLoader.concat(
                        ['babel?' + JSON.stringify(config.babel)]
                    ).concat(settings.lastJsLoader)
                    ,
                    exclude: /node_modules/
                },
                {
                    test: /.css$/,
                    loader: "style!css"
                },
                {
                    test: /[^m]\.less$/,
                    loader: "style!css!less"
                },
                {
                    test: /\.m\.less$/,
                    loader: "style!css?modules&localIdentName=[local]___[hash:base64:5]!less"
                },
                {
                    test: /-m\.less$/,
                    loader: "style!css?modules&localIdentName=[local]___[hash:base64:5]!less"
                },
                { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=1&minetype=application/font-woff&name=__media/[path][name][hash].[ext]' },
                { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=1&minetype=application/font-woff&name=__media/[path][name][hash].[ext]' },
                { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=1&minetype=application/octet-stream&name=__media/[path][name][hash].[ext]' },
                { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
                { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=1&minetype=image/svg+xml&name=__media/[path][name][hash].[ext]' },
                { test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i, loader: 'url?limit=1&name=__media/[path][name][hash].[ext]'},
                { test: /\.json$/, loader: 'json' }
            ]
        }
    }
    return output
}
