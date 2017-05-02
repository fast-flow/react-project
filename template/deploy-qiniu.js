require('fis3-deploy-qiniu', {
    accessKey: '' || process.env.QINIU_AK,
    secretKey: '' || process.env.QINIU_SK,
    bucket: '' || process.env.QINIU_BUCKET
})
fis.match('view/**/*.html', {
    release: false
})
