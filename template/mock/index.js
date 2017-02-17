var app = require('fms')
var config = require('../config/getConfig')()
require('../config/livereload')
app.run({
    port: config.mockServerPort,
    static: './output'
})
