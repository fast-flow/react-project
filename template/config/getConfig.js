var hashPort = require('hash-to-port')
var iPackgae = require('../package.json')
module.exports = function () {
    return {
        mockServerPort: hashPort('mockServer:' + iPackgae.name),
        livereloadServerPort: hashPort('livereloadServer:' + iPackgae.name)
    }
}
