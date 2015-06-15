/**Web Socketio Chat Room
 *Andrew Mealy
 *CMD: node index.js 
 *localhost:4490
 * use CTRL-C to end process
*/
//Set up Application
var app = require('express')(); 
var http = require('http').Server(app); //Function handler that can supply you to an HTTP server
var io = require('socket.io')(http) //Creats a new instance of socket.io by passing the http object
;
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){//Listen in on connection even for incoming sockets and log to console
	socket.on('chat message', function(msg) {
		io.emit('chat message', msg);
	});
});

http.listen(8888, function(){
	console.log('listening on *:8888');
});