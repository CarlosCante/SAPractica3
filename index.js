var express = require('express');
 
var app = express();
app.get('/', function (req, res) {
 res.send('Hola mundo, practica 6, prueba del dia');
});

app.listen(process.env.PORT || 3000);
 
module.exports = app;