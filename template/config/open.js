var open = require('./openBrowser')
var config = require('./getConfig')()
open('http://127.0.0.1:' + config.mockServerPort + '?refresh-the-page')
