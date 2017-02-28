var livereload = require('livereload')
var config = require('./getConfig')()
var path = require('path')
var lrserver = livereload.createServer({
    port: config.livereloadServerPort,
    delay: 100,
    // js文件使用 webpack 热更新
    exclusions: [/\\.git\//, /\\.svn\//, /\\.hg\//, /\.js/]
})
var watchPath = path.join(__dirname, '../output')
lrserver.watch(watchPath)
console.log('Livereload: http://127.0.0.1:' + config.livereloadServerPort + '\n\t' + watchPath)
