const bodyParser = require('body-parser');
const express = require('express');
const flash = require('express-flash');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
app.use(cookieParser('ffffffff'));
app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:true,
    cookie:{ maxAge:60000 }
}));

app.use(flash());


app.get('/',(req,res) => {

  var emailError = req.flash('emailError');
  var pontosError = req.flash('pontosError');
  var nomeError = req.flash('nomeError');

  emailError = (emailError == undefined || emailError.length < 0) ? undefined : emailError;
  email = (email == undefined || email.length == 0) ? ' ' : email;

  res.render('index', {emailError,pontosError,nomeError,email: req.flash('email')});
});

app.post('/form',(req,res) => {
    var {email, nome, pontos} = req.body;

    var emailError;
    var pontosError;
    var nomeError;


    if(email == undefined || email == ' '){
        emailError = 'O e-mail não pode ser vazio';
    }
    if(pontos == undefined || pontos < 20){
        pontosError = 'Você não pode ter menos que 20 pontos';
    }
    if(nome == undefined || nome == ' '){
       nomeError = 'O nome não pode estar vazio';
    }
    if(nome.length < 4){
      nomeError = 'Nome muito pequeno';
   }
    if(emailError != undefined || pontosError != undefined || nomeError != undefined){

      req.flash('emailError',emailError);
      req.flash('pontosrror',pontosError);
      req.flash('nomeError',nomeError);
      res.redirect('/')
    }else{
      res.send('Formulário sem erro de validação')
    }

});

app.listen(3000,() => {

  console.log('Servidor rodando na porta 3000')
});
