var markrun = require('markrun')
var path = require('path')
var config = require('./getConfig')()

fis.media('debug').match('**', {
    useCache: false
})

fis.match('*.md', {
    rExt: '.html',
    isHtmlLike: true,
    parser: [
        function (content, file) {
            var infoMarkrun = {
                filepath: file.fullname
            }
            content = content.replace(/([^!])(\[.*?\]\((.*\.demo\.js)\))/gi, function (source, $1, $2, $3) {
                return $1 + '<!--MR-R\n{type: "pre",file:"' + $3 + '"}\n-->\n\n' + $2
            })
            var html = markrun(
                content,
                {},
                infoMarkrun
            )
            // infoMarkrun.deps = infoMarkrun.deps || []
            // infoMarkrun.deps.forEach(function (filename) {
            //      file.cache.addDeps(filename)
            // })
            html = html.replace(/href="([^"]+)\.md"/g, 'href="$1.html"')
            return html
        },
        fis.plugin('jdists', {
            trigger: 'dev'
        })
    ]
})

var LessPluginFunctions = require('less-plugin-functions')
fis.match('*.less', {
    rExt: '.css',
    parser: fis.plugin('less-2.x', {
        plugins: [
            new LessPluginFunctions()
        ]
    })
})

fis.media('dev').match('*.{md,html}', {
    postprocessor: function (content, file) {
       content = content.replace(/_src=(['"].*?.js['"])/g, 'src=$1')
       if (fis.project.currentMedia() === 'dev') {
           if (content.indexOf('fastbuild-livereload') === -1) {
               livereloadScriptTag = '<script>'+
                                     "document.write('<script data-fastbuild-livereload=\"true\" src=\"http://' + (location.host || 'localhost').split(':')[0] + ':" + config.livereloadServerPort + "/livereload.js?snipver=1\"></' + 'script>')"+
                                     "</script> "
               content = content.replace(/<\/\s*body>/, livereloadScriptTag + '</body>')
           }
       }
       return content
   }
})
