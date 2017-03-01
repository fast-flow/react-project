var hashPort = require('hash-to-port')
var iPackgae = require('../package.json')
var fs = require('fs')
var nodePath = require('path')

module.exports = function () {
    return {
        mockServerPort: hashPort('mockServer:' + iPackgae.name),
        livereloadServerPort: hashPort('livereloadServer:' + iPackgae.name),
        renderServerPort: hashPort('renderServer:' + iPackgae.name),
        less: require('./less'),
        babel: JSON.parse(fs.readFileSync(nodePath.join(__dirname, '../.babelrc')).toString())
    }
}
