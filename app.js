var express = require('express'),
	exphbs  = require('express-handlebars'),
	path = require('path'),
	app = express(),
	server = app.listen(3000),
	io = require('socket.io').listen(server);

var index = require('./routes/index');
var mobile = require('./routes/mobile');
var desktop = require('./routes/desktop');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.use('/', index);
app.use('/mobile', mobile);
app.use('/desktop', desktop);

var host = server.address().address,
	port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);

io.sockets.on('connection', function (socket) {

	socket.on('mobile connected', function(data) {
		console.log('mobile');
		console.log(data);
	});

	socket.on('desktop connected', function(data) {
		console.log('desktop');
		console.log(data);
		socket.join('desktop');
	});

	socket.on('mobile clicked', function(data){
		console.log(data);
		socket.broadcast.emit('trigger', { msg: 'Trigger time' });
	})

    socket.emit('welcome', { msg: 'The world is round, there is no up or down.' });

});

function room(roomSocket, roomId){
  this.roomSocket = roomSocket;
  this.roomId = roomId;
  this.mobileSockets = [];
};