export default function (jqXHR, callback) {
    jqXHR.done(function (res) {
        if (res.status === 'success') {
            typeof callback.success === 'function' && callback.success(res)
        }
        else {
            typeof callback.error === 'function' && callback.error(res)
        }
    })
    .fail(function () {
        typeof callback.fail === 'function' && callback.fail.apply(this, arguments)
    })
    .always(function () {
        typeof callback.always === 'function' && callback.always.apply(this, arguments)
    })
}
