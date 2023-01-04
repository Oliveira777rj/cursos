const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const jwt = require('jsonwebtoken');

const JWTSecret = 'jsdnsjjjdjjjjsjs';

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

function auth(req,res,next){
  const authToken = req.headers['authorization'];

  if(authToken != undefined){

    const bearer = authToken.split(' ');
    var token = bearer[1];

    jwt.verify(token,JWTSecret,(err,data) => {

          if(err){ 
            res.status(401);
            res.json({err:'Token Inválido'});
          }else{
            req.token = token;
            req.loggedUser = {id:data.id, email:data.email};
            next();
          }
        });
        }else{
          res.status(401);
          res.json({err:'Token inválido'})
          
        }
};

var DB = {

  games:[

    { 
      id:10,
      title:'Combat Arms',
      year: 2006,
      price:12
    },
    { 
      id:20,
      title:'LOL',
      year: 2012,
      price:16

    },   { 
      id:30,
      title:'Minecraft',
      year: 2010,
      price:25
    },
  ],
  users:[

    {
      id:1,
      name:'Michel',
      email:'michelvidal@email.com',
      password:'node1'
    },
    {
      id:2,
      name:'Joao',
      email:'joao@email.com',
      password:'node1node'
    }
  ]
}

app.get('/games',auth,(req,res) => {
 
  res.statusCode = 200;
  res.json(DB.games)
});

app.get('/game/:id',auth,(req,res) => {

  if(isNaN(req.params.id)){
    res.sendStatus(400);

  }else{
    var id = parseInt(req.params.id);
    
    var game = DB.games.find(g => g.id == id);

    if(game != undefined){
      res.statusCode = 200;
      res.json(game);
    }else{
      res.status(404)
    }
  }

});

app.post('/game',auth,(req,res) => {
  var {title,year,price} = req.body;
  DB.games.push({

    id:40,
    title,
    year,
    price
  });
  res.sendStatus(200);

});

app.delete('/game/:id',auth,(req,res) => {

  if(isNaN(req.params.id)){
    res.sendStatus(400);

  }else{
    var id = parseInt(req.params.id);
    var index = DB.games.findIndex(g => g.id == id);

    if(index == -1){
      res.sendStatus(404);
    }else{
      DB.games.splice(index,1);
      res.sendStatus(200);
    }
  }
});

app.put('/game/:id',auth,(req,res) => {

  if(isNaN(req.params.id)){
    res.sendStatus(400);

  }else{

    var id = parseInt(req.params.id);
    
    var game = DB.games.find(g => g.id == id);

    if(game != undefined){
      var {title,price,year} = req.body;
      
      if(title != undefined){
        game.title = title
      }
      if(year != undefined){
        game.year = year
      }
      if(price != undefined){
        game.price = price
      }
      res.sendStatus(200)
    }else{
      res.sendStatus(404)
    }
  }
});

//JWT

app.post('/auth',(req,res) => {

    var {email,password}  = req.body;

    if(email != undefined){

      var user = DB.users.find(u => u.email == email);

      if(user != undefined){

        if(user.password == password){
          jwt.sign({id: user.id, email:user.email},JWTSecret,{expiresIn:'48'},(err,token) => {

            if(err){
              res.status(400);
              res.json({err:'Falha interna'});
            }else{
              res.status(200);
              res.json({token: token})
            }
          })
    
        }else{
            res.status(401);
            res.json({err: 'Credenciais invalidas!'})
        }
      }else{
        res.status(404);
      res.json({err: 'Email enviado não existe na base de dados!'})

      }
    }else{
      res.status(400);
      res.json({err: 'Email enviado invalido!'})
    }
});


app.listen(8080,() => {

  console.log('Servidor rodando na porta 8080')
});

