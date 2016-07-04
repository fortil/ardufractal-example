'use strict'; //me permite programar con javascr

require('!style!css!./vendor/icomoon/style.css')
var snabbdom =require('snabbdom')

const F = require('fractal-js/dist/fractal.min.js')
const app = require('./modules/camera')

const patch = snabbdom.init([ // Init patch function with choosen modules
  require('snabbdom/modules/class'), // makes it easy to toggle classes
  require('snabbdom/modules/props'), // for setting properties on DOM elements
  require('snabbdom/modules/attributes'), // for setting attributes on DOM elements
  require('snabbdom/modules/style'), // handles styling on elements with support for animations
  require('snabbdom/modules/eventlisteners'), // attaches event listeners
])

const io = require('socket.io-client')

const serverName = 'http://192.168.00.180:4000'

let socket = io(serverName, {})

let engine = F.run({
  root: F.log(require('./modules/camera')),
  tasks: {
    value: F.tasks.value.task(onValue),
    socket: F.tasks.socketio.task(socket),
  },
  drivers: {
    view: F.drivers.view('#app'),
    socket: F.drivers.socketio(socket),
  },
})
function onValue(server) {
  // main module can return the serverName as a value via Value Task
  socket.disconnect()
  socket = io(server, {})
  engine.tasks.socket.set(socket)
  engine.drivers.socket.set(socket)
}



if(module.hot){
  module.hot.accept('./modules/camera',(comp)=>{
    let reApp = require('./modules/camera')
    engine.reattach(reApp)
  })
}