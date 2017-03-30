//Definir 2 buffers sencillos aaaa bbbb concatenarlos y pasarlos a json

var bufA = new Buffer("aaaa");
var bufB = new Buffer("bbbb");

var bufResultante = Buffer.concat([bufA,bufB]);

var json = bufResultante.toJSON(bufResultante);

console.log(json);

