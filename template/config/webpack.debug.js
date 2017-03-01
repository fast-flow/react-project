var Es3ifyPlugin = require('es3ify-webpack-plugin')
var webpackConfig = require('./webpack.base')({
    lastPlugins: [
        new Es3ifyPlugin()
    ]
})
module.exports = webpackConfig
