const express = require('express');
const app = express();
app.use(express.json());
const bd = [];

app.get('/',(req,res) => {

  return res.json(bd)
});

app.post('/',(req,res) => {

  const {nome,idade,saldo,chave} = req.body;
  const item = {
    "id":bd.length,
    "nome":nome,
    "idade":idade,
    "saldo":saldo,
    "chave":chave
  };
  bd.push(item);
  return res.json(bd);
});

app.delete('/:id',(req,res) => {

  const id = req.params
  const item = bd.findIndex(element => element.id == id.id)
  bd.splice(item,1)
  return res.json(bd)
});

app.put('/:id',(req,res) => {

  const id = req.params
  const item = bd.findIndex(element => element.id == id.id)
  const {nome,idade,saldo,chave} = req.body;
  const newItem ={
    "id":bd.length,
    "nome":nome,
    "idade":idade,
    "saldo":saldo,
    "chave":chave
  
  }
  bd[item] = newItem;
  return res.json(bd)
});

app.listen(8000,(req,res) => {
  console.log('Servidor rodando na porta 8000!')
});

