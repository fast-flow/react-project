var app = require('fms')
var config = require('../config/getConfig')()
require('../config/livereload')
require('./render')
app.run({
    port: config.mockServerPort,
    static: './output',
    view: {
        server: 'http://127.0.0.1:' + config.renderServerPort,
        data: {},
        templateDir: './output/view'
    }
})

require('./example')(app)
