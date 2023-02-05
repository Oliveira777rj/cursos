const express = require('express');
const router = express.Router();

const path = require('path');
const basePath = path.join(__dirname,'../templates');

router.get('/add',(req,res) => {
  res.sendFile(`${basePath}/userform.html`)
  res.redirect()
});

router.post('/save',(req,res) => {
  const {name, age} = req.body
  console.log(`Nome: ${name}, idade: ${age}`)
});

router.get('/:id',(req,res) => {

  const id = req.params.id
  console.log(`Estamos buscando pelo usúario: ${id}`)
  res.sendFile(`${basePath}/users.html`)
});

router.get('/',(req,res) => {

  res.sendFile(`${basePath}/index.html`)
});

module.exports = router