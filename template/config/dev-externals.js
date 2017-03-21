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
var path = require('path')
var doNotCompileList = []
var localConfig = require('../local-config')
var config = require('./getConfig')()
module.exports = [
    /^[.]+$/,
    function (context, request, callback) {
        var relativeToProjectRequest = './' + path.join(context, request).replace(config.projectPath, '')
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
            isCompile = matchRequest(localConfig.webpackOnlyCompile, relativeToProjectRequest)
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
            return callback(null, 'local_config_js$' + request.replace(/[-.\/]/g,'_'))

        }
        return callback()
    },
]
