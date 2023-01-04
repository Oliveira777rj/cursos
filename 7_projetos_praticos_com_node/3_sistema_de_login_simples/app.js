const fs = require('fs');
const prompt = require('readline-sync');

var listaDeUsuario = [];
listaDeUsuario = JSON.parse(fs.readFileSync('db.json'));

var loop = true;
var loged = false;
while(loop){

  console.log('LOGIN ');
  console.log('Insira seu usuario e senha ');

  var usuario = prompt.question('Usuario: ');
  var senha = prompt.question('Senha: ');

  for (let index = 0; index < listaDeUsuario.length; index++) {
    if(usuario === listaDeUsuario[index].login && senha === listaDeUsuario[index].senha){
      console.clear()

      console.log('Bem-vindo')
    }else{

      console.clear()
      console.log('Login e senha invalidos.')
    }
    
  }
}

while(loop){

  if(loged === false){
    login()
  }
}