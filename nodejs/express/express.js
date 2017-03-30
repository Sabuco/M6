//crear un servidor via express que lanza una pag.html que te dos enlaces a dos nuevas paginas.
var express = require('express');
var app = express();
var path = require('path');


app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname + "/main.html"));
})

app.get('/pagina1.html', function (req, res) {
   res.sendFile(path.join(__dirname + "/pagina1.html"));
})

app.get('/pagina2.html', function (req, res) {
   res.sendFile(path.join(__dirname + "/pagina2.html"));
})

var server = app.listen(8081);