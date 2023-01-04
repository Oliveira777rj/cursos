let app = require('./src/app');
let supertest = require('supertest');
let request = supertest('http://localhost:3131');

test('A aplicação deve responder na porta 3131', () => {

  return request.get('/').then(res => expect(res.statusCode).toEqual(200));
});

test('Deve retornar vermelho como cor favorita', () => {

  return request.get('/cor/victor').then(res => expect(res.body.cor).toEqual('vermelho'));
})