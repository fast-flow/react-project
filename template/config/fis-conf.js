var markrun = require('markrun')
var path = require('path')
var config = require('./getConfig')()
var lodash = require('lodash')

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
                {
                    replace: {
                        pre: function (data, options, info) {
                            if (typeof data.run === 'undefined') {
                                data.run = false
                            }
                            var path = require('path')
                            var fs = require('fs')
                            var fullpath = path.join(path.dirname(info.filepath), data.file)
                            var code = fs.readFileSync(fullpath, 'utf-8').toString()
                            info.deps = info.deps || []
                            info.deps.push(fullpath)
                            code = '<pre class="markrun-source-pre" >' + options.highlight(code) + '</pre>'
                            if (data.run) {
                                code = code +'<script data-markrun-lastrun="true" src="'+ data.file + '"></script>'
                            }
                            return code
                        }
                    },
                    compile: {
                        html: function (code, data) {
                            var source = code
                            var classNames = []
                            code.replace(/class=\"([^"]*?)\"/g, function (_, $1) {
                                if ($1) {
                                    classNames = classNames.concat($1.split(' '))
                                }
                            })
                            classNames = lodash.uniq(classNames)
                            classNames = classNames.map(function (item) {
                                item = '.' + item
                                if (/--/.test(item)){
                                    item  = 'html ' + item
                                }
                                return item
                            })
                            source = source.replace(/class=/g,"className=")
                            source = source + '\n<!--class:\n' + classNames.join(' {}\n') + ' {}\n-->'
                            return {
                                lang: 'html',
                                code: code,
                                source: source
                            }
                        }
                    }
                },
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


fis.match('*.less', {
    rExt: '.css',
    parser: fis.plugin('less-2.x', {
        plugins: config.less.plugins
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
fis.match('**.js', {
    release: false
})
fis.match('base/vendor/**/**.js', {
    release: true
})
