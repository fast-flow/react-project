import { Component } from "react"
import { render } from "react-dom"
import extend from "extend"

// common script
// require('./view/pc/entry.js')
// or
// require('./view/mobile/entry.js')

// entry
switch(location.pathname) {
    case '/example':
        require(['./view/example/app'], renderComponent())
    break
    case '/view/example/index.html':
        require(['./view/example/app'], renderComponent())
    break
    case '/m/example/README.html':
        require(['./m/example/index.demo.js'], renderComponent())
    break
    case '/view/redux/index.html':
        require(['./view/redux/app'], renderComponent())
    break
    default:
    console.log('/dev.js not match ' + location.pathname)
}

function renderComponent (settings) {
    var defaultSettins = {
        renderNode: document.getElementById('app'),
        props: {}
    }
    settings = extend(true, defaultSettins, settings)
    if (typeof settings.renderNode === 'string') {
        settings.renderNode = document.getElementById(settings.renderNode)
    }
    return function (Component) {
       let App = typeof Component.default !== 'undefined'? Component.default :Component
       if (typeof settings.renderNode === 'undefined') { throw new Error('/dev.js not find renderNode') }
       render(<App {...settings.props} />, settings.renderNode)
    }
}
