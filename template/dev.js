require('./view/common/entry.js')
class Entry {
    '/example' () {
        require(['./view/example/app'], renderComponent())
     }
     '/example-router' () {
        require(['./view/example-router/app'], renderComponent())
     }
    '/m/example/README.html' () {
        require(['./m/example/index.demo.js'], renderComponent())
     }
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
    if (typeof settings.renderNode === 'string') {
        settings.renderNode = document.getElementById(settings.renderNode)
    }
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
