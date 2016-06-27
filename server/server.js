function handler (req, res) {
  res.writeHead(200)
  res.end('hola mundo')
}

var app = require('http').createServer(handler),
     io = require('socket.io').listen(app),
     fs = require('fs'),
   five = require('johnny-five');
var t2 = new Date()

app.listen(8080);


board = new five.Board()

board.on("ready", function() {
  var sensor = this
  led = new five.Led(13)

  io.sockets.on('connection', function (socket) {
    socket.on('led', function (data) {
      if (data.state=='false') {
        led.stop().off()
      }else{
        led.strobe(+data.ms)
      }
    })
    sensor.pinMode(1, five.Pin.ANALOG)
      sensor.analogRead(1, function(voltage) {
        if(voltage>600)
          emit(io,new Date(),voltage)
      })
    }) 
})
function emit(io,t,volt) {
  var diff = Math.abs(t-t2)/2000
  if(diff>1){
    io.emit('sensor',volt)
    t2 = new Date()
  }
}