var app = require('fms')
var config = require('../config/getConfig')()
var userConfig = require('../config.js')
require('../config/livereload')
require('./render')
var webpackServerUrl = 'http://127.0.0.1:' + config.webpackServerPort
var urlRewrite = []
// domain : "/static/"
if (userConfig.domain.length > 2) {
    urlRewrite = urlRewrite.concat([
        /^.*$/,
        function (string) {
            var regexpString = userConfig.domain.replace(/([.$^{[(|)*+?\/\\])/g,'\\$1')
            var regexp = new RegExp('^' + regexpString)
            return string.replace(regexp, '/')
        }
    ])
}
app.run({
    port: config.mockServerPort,
    static: './output',
    urlRewrite:urlRewrite,
    read: ['view/example', 'view/example-m', 'view/redux'],
    connect: function (req, res, next) {
        if (req.url === '/__webpack_hmr') {
            res.redirect(webpackServerUrl + '/__webpack_hmr')
            return
        }
        next()
    },
    proxy404: webpackServerUrl,
    view: {
        server: 'http://127.0.0.1:' + config.renderServerPort,
        data: {},
        templateDir: './output/view'
    }
})

require('./example')(app)
