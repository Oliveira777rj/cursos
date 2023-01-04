var pdf = require('html-pdf');

pdf.create('Prazer, meu nome é Michel',{}).toFile('./meuPrimeiroPDF.pdf', (err,res) => {
  if(err){
    console.log('Erro aconteceu')
  }else{
    console.log(res)
  }
});