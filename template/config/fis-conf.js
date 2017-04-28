var markrun = require('markrun')
var path = require('path')
var config = require('./getConfig')()
var userConfig = require('../config')
var lodash = require('lodash')
var fs = require('fs')
var markrunTemplate = fs.readFileSync(path.join(__dirname, '../m/template.html')).toString()

var del = require('del')
var delPath = __dirname + '/../output'
// 最终构建必须删除以前的代码，原因1：防止非必要的文件被构建。原因2：防止文件太多导致node内存泄漏
if (fis.project.currentMedia() === 'online1') {
    del.sync(delPath)
    console.log('del: ' + delPath)
}
fis.match('{mock/**,npm-debug.log,package.json,yarn.lock,*.js,online,**.sh}', {
    release: false
})
fis.media('dev').match('**.html', {
    parser: [
        fis.plugin('jdists', {
            trigger: 'dev'
        })
    ]
}).match('*.md', {
    rExt: '.html',
    isHtmlLike: true,
    parser: [
        function (content, file) {
            var infoMarkrun = {
                filepath: file.fullname
            }
            var html = markrun(
                content,
                {
                    template: function () {
                        return markrunTemplate
                    },
                    replace: {
                        pre: function (data, options, info) {
                            if (typeof data.run === 'undefined') {
                                data.run = false
                            }
                            var fs = require('fs')
                            var fullpath = path.join(path.dirname(info.filepath), data.file)
                            var code = fs.readFileSync(fullpath, 'utf-8').toString()
                            info.deps = info.deps || []
                            info.deps.push(fullpath)
                            code = '<pre class="markrun-source-pre" >' + options.highlight(code) + '</pre>'
                            if (data.run) {
                                code = code +'<script data-markrun-lastrun="true" src="'+ data.file + '"></scr' + 'ipt>'
                            }
                            return code
                        }
                    },
                    compile: {
                        demo: require('markrun-themes/box-compile-replace'),
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
    parser: fis.plugin('less-2.x', userConfig.less)
})

fis.media('dev').match('*.{md,html}', {
    postprocessor: function (content, file) {
       content = content.replace(/_src=(['"].*?.js['"])/g, 'src=$1')
       if (fis.project.currentMedia() === 'dev') {
           if (content.indexOf('fastbuild-livereload') === -1) {
               livereloadScriptTag = '<script>'+
                                     "document.write('<script data-fastbuild-livereload=\"true\" src=\"http://' + (location.host || 'localhost').split(':')[0] + ':" + config.livereloadServerPort + "/livereload.js?snipver=1\"></' + 'script>')"+
                                     "</sc" + "ript> "
               content = content.replace(/<\/\s*body>/, livereloadScriptTag + '</body>')
           }
       }
       return content
   }
})
fis.match('**.js', {
    release: false
}).match(userConfig.webpackEntry, {
    release: true
}).match(userConfig.vendorFile, {
    release: true
})

fis.media('online1')
    .match('view/map.json', {
        parser: [
            function (content) {
                return content.replace(/__REPLACE_RESOURCE_MAP__/g, '__RESOURCE_MAP__')
            }
        ]
    })
    .match('**.html', {
        parser: [
            fis.plugin('jdists', {
                trigger: 'online'
            })
        ]
    })
    .match('**.md', {
        release: false
    })
    .match('m/**.html', {
        release: false
    })

    fis.media('online2')
        .match('**', {
            useHash: true
        })
        .match('{*.html,view/map.json,__media/**,__chunk/**}', {
            useHash: false,
            release: true
        })
        .match('*.css', {
            optimizer: fis.plugin('clean-css')
        })
        .match('*.png', {
          optimizer: fis.plugin('png-compressor')
        })
        .match('**', {
            domain: userConfig.domain.replace(/\/$/,'')
        })
