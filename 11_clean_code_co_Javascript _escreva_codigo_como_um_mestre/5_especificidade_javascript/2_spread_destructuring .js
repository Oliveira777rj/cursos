function Teste(){
  let a ={
    nome: "A",
    idade: 12
  }
  let b = {...a}
}


// Se o campo tem o mesmo nome da variavel, pode omitir a varivel 
function Teste1(nome, idade){
  let b = {
    nome,
    idade
  }
}