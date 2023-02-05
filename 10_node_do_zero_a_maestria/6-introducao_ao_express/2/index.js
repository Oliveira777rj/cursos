const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const path = require('path');
const basePath = path.join(__dirname,'templates');

//arquivos estaticos / css
app.use(express.static('public'));

const usersRoutes = require('./users');
app.use('/users', usersRoutes)

app.get('/',(req,res) => {
  res.sendFile(`${basePath}/index.html`)
});

app.use((req,res,next) => {
  res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port,() => {
  console.log(`Servidor rodando na porta http://localhost:${port}`)
});

