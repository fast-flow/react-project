fis.match('**', {
    deploy: fis.plugin('qiniu', {
        accessKey: '',
        secretKey: '',
        bucket: ''
    })
})
fis.match('view/**/*.html', {
    release: false
})
