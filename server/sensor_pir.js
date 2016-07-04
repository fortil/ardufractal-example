'use strict'
/*
Servidor para poder acceder a él desde otro lugar
*/
function handler (req, res) {
  res.writeHead(200)
  res.end('hola mundo, electrónica')
}
var app = require('http').createServer(handler)
app.listen(4000)
 
 
/*
Lectura y comunicación de arduino
*/
var io = require('socket.io').listen(app)
var five = require('johnny-five')
 
let board = new five.Board()
/*
Declaración de todas las variables a utilizar
El pin a leer, el pin LED el tiempo de captura de la camara
y el número de capturas que va haciendo la camara
*/
var PIN_MONTION = 7
var DIGITAL_PIN = 13
var TIME_CAPTURE = 2000
var CAPTURE = false
var Tfinal = new Date()
var Tinicial = new Date()
var NUMBER_CAPTURE = 0

board.on("ready", function() {  
  var sensor = this
 
  var motion = new five.Motion({
    pin:PIN_MONTION,
  })
  /*
  Primero se calibra el PIR
  */
  motion.on("calibrated", function(evt) {
    console.log("calibrated", evt)
  })
  /*
  Cuando inicia un movimiento, inmediatamente se enciende el pin digital
  */
  motion.on("motionstart", function(evt) {
    sensor.digitalWrite(DIGITAL_PIN, 1)
    Tinicial = new Date(evt.timestamp)
  })
  /*
  Cuando termina un movimiento, inmediatamente se apaga el pin digital
  y se toma el tiempo final como el tiempo en que se terminó el movimiento
  */
  motion.on("motionend", function(evt) {
    sensor.digitalWrite(DIGITAL_PIN, 0)
    Tfinal = new Date(evt.timestamp)
  })
  /*
  Conexión con el cliente
  */
  io.sockets.on('connection', function (socket) {
    console.log('-> cliente conectado')
  /*
  recibe la orden de tomar o no una foto
  */
    socket.on('initCamera',(capturar)=>{
      CAPTURE = capturar
      console.log('-> camara',CAPTURE)
      setInterval(()=>{
        if(diffTime(Tfinal,Tinicial,TIME_CAPTURE) && CAPTURE=='activada'){
          io.emit('takePicture','Tomando una foto')
          NUMBER_CAPTURE ++
          console.log('--> Tomando foto numero '+NUMBER_CAPTURE)
          Tfinal = new Date()
          Tinicial = new Date()
        }
      },100)
    })
  })
})
 
function diffTime(t,t2,s) {
  return (Math.abs(t-t2)/s) > 1
}