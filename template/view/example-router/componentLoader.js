function componentLoader (key) {
    var map = {
        'home': function (location, callback) {
            require.ensure([], function (require) {
                callback(null, require('./home/app').default)
            })
        },
        'inbox': function (location, callback) {
            require.ensure([], function (require) {
                callback(null, require('./inbox/app').default)
            })
        },
        'about': function (location, callback) {
            require.ensure([], function (require) {
                callback(null, require('./about/app').default)
            })
        }
    }
    return map[key]
}
export default componentLoader
