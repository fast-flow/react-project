var webpack = require('webpack')
var config = require('./getConfig')()
var express = require('express')
var cors = require('cors')
var app = express();
var webpackHotConfig = require('../config/webpack.hot')
var webpackDebugConfig = require('../config/webpack.debug')

module.exports = function (settings) {
    var webpackConfig
    if (settings.hot) {
        webpackConfig = webpackHotConfig
    }
    else {
        webpackConfig = webpackDebugConfig
    }
    var compiler = webpack(webpackConfig)
    app.use(cors())
    app.use(require('webpack-dev-middleware')(compiler, {
      publicPath: '/'
    }))
    var serverTitle = 'Webpack debug server'
    if (settings.hot) {
        serverTitle = 'Webpack hot server'
        app.use(require('webpack-hot-middleware')(compiler))
    }
    app.listen(config.webpackServerPort, function(err) {
      if (err) {
        return console.error(err);
      }
      console.info(serverTitle + ': http://127.0.0.1:' + config.webpackServerPort)
    })
}
