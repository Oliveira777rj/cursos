const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const path = require('path');
const basePath = path.join(__dirname,'templates');

//Middleware
// const checkAuth = function(req,res, next){

//   req.authStatus = true

//   if(req.authStatus){
//     console.log('Está logado, pode continuar.')
//     next()
//   }else{
//     console.log('Não está logado, faça login para continuar')
//     next()
//   }
// }
// app.use(checkAuth)

app.get('/users/add',(req,res) => {
  res.sendFile(`${basePath}/userform.html`)
});

app.post('/users/save',(req,res) => {
  const {name, age} = req.body
  console.log(`Nome: ${name}, idade: ${age}`)
});

app.get('/users/:id',(req,res) => {

  const id = req.params.id
  console.log(`Estamos buscando pelo usúario: ${id}`)
  res.sendFile(`${basePath}/users.html`)
});

app.get('/',(req,res) => {

  res.sendFile(`${basePath}/index.html`)
});

app.listen(port,() => {
  console.log(`Servidor rodando na porta http://localhost:${port}`)
});

