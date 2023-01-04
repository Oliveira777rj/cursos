const serverless = require("serverless-http");
const express = require("express");
const app = express();
const mysql = require('mysql2/promise');
const bodyParser = require("body-parser");

app.use(bodyParser.json())

//listagem de categorias

app.get('/listar-produtos', async (req, res, next) => {

  const connection = await mysql.connection({

    host:'database-1.cf4nahkon5f9.us-east-1.rds.amazonaws.com',
    user:'admin',
    password:'.&',
    port:'3306',
    database:'productsdb'
  })

  const [rows, fields] = await connection.execute("select * from products")
  res.status(200).json({
    response:rows
  })
})
//listagem de produtos
app.get('/listar-categorias', async (req, res, next) => {

  const connection = await mysql.connection({

    host:'database-1.cf4nahkon5f9.us-east-1.rds.amazonaws.com',
    user:'admin',
    password:'.&',
    port:'3306',
    database:'productsdb'
  })

  const [rows, fields] = await connection.execute("select * from category")
  res.status(200).json({
    response:rows
  })
})
//cadastro de produtos
app.post('/cadastro-produto', async function(req, res, next) {
  const { name, price, category } = req.body;

  const connection = await mysql.connection({

    host:'database-1.cf4nahkon5f9.us-east-1.rds.amazonaws.com',
    user:'admin',
    password:'.&',
    port:'3306',
    database:'productsdb'
  })
  const [rows, fields] =  await connection.execute("INSERT INTO `products` (`id`, `name`, `price`, `category`) VALUES (NULL, ?, ?, ?)", [ name, price, category ])
  res.status(200).json({
    message:'Produto cadastrado com sucesso!'
  });
});
//cadastro de categorias
app.post('/cadastro-categoria', async function(req, res, next) {
  const { name } = req.body;

  const connection = await mysql.connection({

    host:'database-1.cf4nahkon5f9.us-east-1.rds.amazonaws.com',
    user:'admin',
    password:'.&',
    port:'3306',
    database:'productsdb'
  })
  const [rows, fields] =  await connection.execute("INSERT INTO `category` (`id`, `name`) VALUES (NULL, ?)", [ name ])
  res.status(200).json({
    message:'Categoria cadastrada com sucesso!'
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
