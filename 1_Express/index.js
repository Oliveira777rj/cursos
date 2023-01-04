const express = require("express"); // importando o express
const app = express(); // iniciando o express

app.get('/', (req,res) =>{

  res.send('Servidor funcionando!')

});

app.get('/blog/:artigo?',(req,res)=>{

  var artigo = req.params.artigo
  
  if(artigo){
    res.send('<h3>artigo ' + artigo + ' não existe <h3>');
  }else{
    res.send('Bem vindo ao blog');
  }
  
});


app.get('/canal/youtube',(req,res)=>{

  var canal = req.query['canal']
  if(canal){
    res.send(canal)
  }else{
    res.send('Canal não fornecido')
  }
});

app.get('/ola/:nome/:empresa',(req,res)=>{

  // REQ => Dados enviados pelo usuário
  // RES => Resposta que vai ser enviado ao usuário
  var nome = req.params.nome;
  var empresa = req.params.empresa;
res.send('Ola ' + nome + ' do '+ empresa + ' seja bem vindo')
})


app.listen(4000, function(erro){
  if(erro){
    console.log('Ocorreu um erro!')
  }else{
    console.log('Servidor iniciado com sucesso!')
  }
});
