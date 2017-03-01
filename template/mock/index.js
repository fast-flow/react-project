var app = require('fms')
var config = require('../config/getConfig')()
require('../config/livereload')
require('./render')
var webpackServerUrl = 'http://127.0.0.1:' + config.webpackServerPort
app.run({
    port: config.mockServerPort,
    static: './output',
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
