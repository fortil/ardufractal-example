'use strict'; //me permite programar con javascr

import '!style!css!./vendor/icomoon/style.css'
import snabbdom from 'snabbdom'

const app = require('./app')

const patch = snabbdom.init([ // Init patch function with choosen modules
  require('snabbdom/modules/class'), // makes it easy to toggle classes
  require('snabbdom/modules/props'), // for setting properties on DOM elements
  require('snabbdom/modules/attributes'), // for setting attributes on DOM elements
  require('snabbdom/modules/style'), // handles styling on elements with support for animations
  require('snabbdom/modules/eventlisteners'), // attaches event listeners
])

const F = require('F')

let core = F.createEngine({
  root:app,
  drivers:{
    view: F.drivers.view('#app',patch),
    /*fetch:F.drivers.fetch(),*/
  }
})

if(module.hot){
  module.hot.accept('./app',(comp)=>{
    let reApp = require('./app')
    core.reattach(reApp)
  })
}