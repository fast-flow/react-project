require('./view/common/entry.js')
class Entry {
    '/example' () { require(['./view/example/app'], renderComponent()) }
}

// =============================
import { Component } from "react"
import { render } from "react-dom"
import Example from "./view/example/app"
import extend from "extend"

if (typeof Entry.prototype[location.pathname] === 'function') {
    Entry.prototype[location.pathname]()
}
else {
    console.log('/dev.js not match ' + location.pathname)
}

function renderComponent (settings) {
    var defaultSettins = {
        renderNode: document.getElementById('app'),
        props: {}
    }
    settings = extend(true, defaultSettins, settings)
    return function (Component) {
       let App = Component
       if (typeof Component.default !== 'undefined') {
           App = Component.default
       }
       if (typeof settings.renderNode === 'undefined') {
           throw new Error('/dev.js not find renderNode')
       }
       render(<App {...settings.props} />, settings.renderNode)
    }
}
