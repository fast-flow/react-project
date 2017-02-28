var LessPluginFunctions = require('less-plugin-functions')
var LessPluginAutoPrefix = require('less-plugin-autoprefix')
module.exports = {
    plugins: [
        new LessPluginFunctions(),
        new LessPluginAutoPrefix({
            browsers: ["not ie < 8"]
        })
    ]
}
