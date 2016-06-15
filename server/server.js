function handler (req, res) {
  res.writeHead(200)
  res.end('hola mundo')
}

var app = require('http').createServer(handler),
     io = require('socket.io').listen(app),
     fs = require('fs'),
   five = require('johnny-five');

app.listen(8080);


board = new five.Board()

board.on("ready", function() {
  led = new five.Led(13)

  io.sockets.on('connection', function (socket) {
    socket.on('led', function (data) {
      if (data.state=='false') {
        led.stop().off()
      }else{
        led.strobe(+data.ms)
      }
    })
  }) 
})