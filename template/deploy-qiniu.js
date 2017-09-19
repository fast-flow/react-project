fis.match('**', {
    domain: '' || process.env.EDM_QINIU_DOMAIN,
    deploy: fis.plugin('qiniu', {
        accessKey: '' || process.env.EDM_QINIU_AK,
        secretKey: '' || process.env.EDM_QINIU_SK,
        bucket: 'edm-fis' || process.env.EDM_QINIU_BUCKET
    })
})
fis.match('view/**/*.html', {
    release: false
})
