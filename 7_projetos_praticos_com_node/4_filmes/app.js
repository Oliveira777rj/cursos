const express = require('express');
const app = express();
const path = require('path');
const public = path.join(__dirname,'public');

app.use('/',express.static(public));
app.get('/',(req,res) => {

  res.sendFile(path.join(public,'filmes.html'));
});

app.listen(8080,() => {

  console.log('Servidor funcionando!')
});

