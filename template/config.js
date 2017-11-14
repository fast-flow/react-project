var path = require('path')
var LessPluginFunctions = require('less-plugin-functions')
var LessPluginAutoPrefix = require('less-plugin-autoprefix')
module.exports = {
    type: 'pc', // "pc" "mobile"
    // If you want to in PC mode to develop mobile page, To view /m/rem/README.md and view/login-m/index.html
    webpackEntry: 'view/**/**entry.js',
    vendorFile: '{base/vendor/**/**.js,m/rem/meta.js,m/icons/iconfont.js}',
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
    },
    relative: false,
    hash: false,
    alwaysHash: [
        'view/example/**'
    ],
    // "/static/"  "http://www.some.com/" "http://www.some.com/static/" "http://www.some.com/p/news/"
    domain: '/',
    fis: function (fis) {
        // http://fis.baidu.com/fis3/docs/beginning/intro.html
    }
}
