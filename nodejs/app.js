//Muestra imagen norris.jpg por el puerto 8080
var fs = require('fs');
var http = require('http');


http.createServer(function(req, res){

	var readStream = fs.createReadStream('norris.jpg');

	res.writeHead(200, {'Content-Type': 'image/jpeg'});

	readStream.on('data', function(data) {
		res.write(data);
	});

	readStream.once('end', function() {
		res.end();
	});

}).listen(8080);


//Muestra texto definido en mensaje.txt por el puerto 8080
/*var fs = require('fs');
var http = require('http');


http.createServer(function(req, res){

	var readStream = fs.createReadStream('mensaje.txt');

	res.writeHead(200, {'Content-Type': 'utf8'});

	readStream.on('data', function(data) {
		res.write(data);
	});

	readStream.once('end', function() {
		res.end();
	});

}).listen(8080);*/