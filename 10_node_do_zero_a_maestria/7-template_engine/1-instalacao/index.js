const express = require('express');
const exphbs = require('express-handlebars');

const hbs = exphbs.create({
  partialsDir: ['views/partials']
});

const app = express();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/post',(req,res) => {
  const post = {

    title:"Aprender Node",
    category:"Backend",
    body: "Aprender backend com node e express"
  }
  res.render('blogpost', {post})
});

app.get('/dashboard',(req,res) => {

  const itens = ["item 1", "item 2", "item 3"]
  res.render('dashboard', {itens})
});

app.get('/',(req,res) => {

  const user = {

    name: "Michel",
    surname:"Vidal",
    age: 24,
    
  }
  const auth = true
  const aprovado = true
  
  res.render('home', { user, auth, aprovado })
});

app.listen(5000,() => {

  console.log('Servidor rodando na porta http://localhost:5000')
});