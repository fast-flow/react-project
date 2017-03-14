var path = require('path')
var LessPluginFunctions = require('less-plugin-functions')
var LessPluginAutoPrefix = require('less-plugin-autoprefix')
module.exports = {
    webpackEntry: 'view/**/**entry.js',
    vendorFile: '{base/vendor/**/**.js,m/rem/meta.js}',
    webpackExternals: {
        'jquery': 'jQuery',
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    less: {
        plugins: [
            new LessPluginFunctions(),
            new LessPluginAutoPrefix({
                browsers: ["not ie < 8"]
            })
        ]
    }
}
