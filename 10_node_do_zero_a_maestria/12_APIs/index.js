const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs.engine);
app.set('view engine','handlebars');
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get('/', (req,res) => {

  res.json({message:'Funcionando corretamente!'})
});

app.post('/create', (req,res) => {
  const {name, price} = req.body

  if(!name){
    res.status(422).json({message: 'O campo nome é obrigatório'})
    return
  }
  res.json({message: `O produto ${name} com preço ${price} foi cadastrado com sucesso`}).status(201)
});

app.listen(8080, () => {
  console.log('Servidor rodando na porta http://localhost:8080')
});