var hashPort = require('hash-to-port')
var iPackgae = require('../package.json')
var fs = require('fs')
var nodePath = require('path')

module.exports = function () {
    return {
        projectPath: nodePath.join(__dirname, '../'),
        mockServerPort: hashPort('mockServer:' + iPackgae.name),
        livereloadServerPort: hashPort('livereloadServer:' + iPackgae.name),
        renderServerPort: hashPort('renderServer:' + iPackgae.name),
        webpackServerPort: hashPort('webpackServerPort:' + iPackgae.name),
        babel: JSON.parse(fs.readFileSync(nodePath.join(__dirname, '../.babelrc')).toString())
    }
}
