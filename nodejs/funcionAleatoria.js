/*Crear una funcion que selecciona aleatoriamente un elemento de un array de string que tiene 5 elementos y
un evento que se dispara con estos datos y imprime el string*/

var events = require('events');

var sabucoEmitter = new events.EventEmitter();

function randomArray() {
	var colores = ["rojo", "azul", "amarillo", "verde", "naranja"];
	var aleatorio=Math.floor(Math.random()*colores.length);

	return colores[aleatorio]
}





sabucoEmitter.on('myRandomArray', function(mensaje){
	console.log(mensaje);
});


sabucoEmitter.emit('myRandomArray', randomArray());