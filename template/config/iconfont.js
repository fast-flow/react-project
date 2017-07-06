var fs = require('fs')
var path = require('path')
var filepath = path.join(__dirname, '../m/icons/iconfont.css')

var css = fs.readFileSync(filepath, 'utf-8').toString()
var lessSource = css.replace(/\.icon-(.*):before\s*{\s*content:\s*"([^"]+)";\s*}/g, [
    '.icon-$1(){&:before { content: "$2"; .iconfont;}}',
    '.icon-$1A(){&:after { content: "$2"; .iconfont;}}',
    '@icon-$1: "$2";'
    ].join('\n'))
    .replace(/\.iconfont/g, '.iconfont()')
    .replace(/font-size:16px;/g, '')
    .replace(/\?t=\d*(#[^']+)?/g,'')
    .replace(/url\(\'iconfont/g, "url('./iconfont")
console.log('------ less ---------')
console.log(lessSource)
console.log('------ less ---------')
var dest = path.join(filepath, '../index.less')
fs.writeFileSync(dest, lessSource, 'utf-8')
console.log(dest + ' writeFile done!')
