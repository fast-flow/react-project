var webpack = require('webpack')
var webpackHotConfig = require('../config/webpack.hot')
var compiler = webpack(webpackHotConfig);
var config = require('./getConfig')()
var express = require('express');
var cors = require('cors')
var app = express();
var compiler = webpack(webpackHotConfig);
app.use(cors())
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: '/'
}));
app.use(require('webpack-hot-middleware')(compiler));
app.listen(config.webpackServerPort, function(err) {
  if (err) {
    return console.error(err);
  }
  console.info('WebpackServer: http://127.0.0.1:' + config.webpackServerPort)
})
