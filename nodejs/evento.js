var events = require('events');

var sabucoEmitter = new events.EventEmitter();


sabucoEmitter.on('custom', function(mensaje){
	console.log(mensaje);
});


sabucoEmitter.emit('custom', 'Los huevos se han roto y la leche derramado');
