const read = require('readline-sync')

var nome = 'Michel';
var idade = 24;
var chave_pix = 456;
var valor_em_conta = 10;


function mostrarDados(){
  console.clear()
  console.log('--------------------------------------------------------------------------')
  console.log(`Nome: ${nome}`)
  console.log(`Idade: ${idade}`)
  console.log(`Chave PIX: ${chave_pix}`)
  console.log(`Saldo: ${valor_em_conta}`)

};

function addValor(valor){
  console.clear()
  valor_em_conta += valor;
  console.log(`Valor em conta: ${valor_em_conta}`);
};

function subValor(valor){
  console.clear()
  valor_em_conta -= valor
  console.log(`Valor em conta: ${valor_em_conta}`);

};

function mudarChave(chave){
  console.clear()
  chave_pix = chave
  console.log(`Nova chave pix: ${chave_pix}`);
};

var loop = true;
while(loop){

  console.log('_____________________________________________________________________________________________________')
  console.log('O que deseja fazer? ')

  console.log('1 - Mostrar dados')
  console.log('2 - Depositar')
  console.log('3 - Fazer PIX')
  console.log('4 - Alterar chave PIX')

  var escolha = read.question('Escolha um dos números: ')

  if(escolha === '1'){
    mostrarDados()
  }
  else if(escolha === '2'){
    var valor = read.question('Digite valor a ser depositado: ')
    addValor(parseInt(valor))
  }
  else if(escolha === '3'){
    var valor = read.question('Digite um valor a ser transferido: ')
    var pix = read.question('Digite uma chave PIX: ')

    subValor(parseInt(valor))
    console.log(`Você realizou a transferencia no valor de ${valor} para a chave pix   ${pix}`)
  }
  else if(escolha === '4'){
      var chave = read.question('Digite sua nova chave PIX ')

      mudarChave(chave)
  }
  else{
    console.log('_________________________________________________-')
    console.log('Opção invalida!')
    console.log('_________________________________________________-')
  }

}

