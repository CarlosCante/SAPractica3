var request = require('supertest');
var app = require('../index.js');

describe('GET /', function() {
 it('Respoder con Hola mundo', function(done) {
 request(app).get('/').expect('Hola mundo, practica 3', done);
 });
});