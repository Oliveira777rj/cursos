const fs = require('fs');

var usuarios = [];

// Escrevendo texto
function read(item,file){

 return item = JSON.parse(fs.readFileSync(file));
};

usuarios = read(usuarios,'db.json')

function create(array,nome,idade,valor,chave){
  array.push({
    "nome": nome,
    "idade": idade,
    "valor": valor,
    "chave": chave
  },);
  update();
};

//Salvando
function save(file){
  fs.writeFileSync('db.json',JSON.stringify(usuarios));
};

function del(array,nome){
  for (let index = 0; index < array.length; index++) {
   
    if(nome === array[index].nome){

      array.splice(index,1)
    }
  }
  update()
}

function update(){

  save('db.json');
  read(usuarios,'db.json');


}

del(usuarios,'teste')

console.log(usuarios)