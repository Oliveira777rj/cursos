const express = require('express');
const exphbs = require('express-handlebars');
const conn = require('./db/conn');
const User = require('./models/User');
const Address = require('./models/Address');
const app = express();

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.get('/', async(req,res) => {

  const users = await User.findAll({ raw: true })
  res.render('home', {users})
  
});

app.get('/users/create',(req,res) => {
  res.render('adduser')
});

app.post('/users/create', async(req,res) => {
  const { name, occupation } = req.body
  let newsletter = req.body.newsletter

  if(newsletter === 'on'){
    newsletter = true
  }else{
    newsletter = false
  };

  await User.create({name, occupation, newsletter})
  res.redirect('/')
});

app.get('/users/:id',async (req,res) => {
  let id = req.params.id

  const user = await User.findOne({ raw:true, where:{ id } })
  res.render('userview', { user })
});

app.post('/users/delete/:id', async(req,res) => {
  let id = req.params.id

  await User.destroy({ where:{ id } });
  res.redirect('/')
});

app.get('/users/edit/:id',async(req,res) => {
  let id = req.params.id

  let user = await User.findOne({ include:Address, where:{ id } })
  res.render('useredit', { user:user.get({ plain:true }) })
});

app.post('/users/update', async(req,res) => {
  let { id, name, occupation, newsletter } = req.body

  if(newsletter === 'on'){
    newsletter = true
  }else{
    newsletter = false
  }

  const userData = {
    id,
    name,
    occupation,
    newsletter
  }
  await User.update(userData, { where: { id:id } });
  res.redirect('/');
});

app.post('/address/create', async(req,res) => {
  let { UserId, street, number, city } = req.body

  const address = {
    UserId,
    street,
    number,
    city
  }
  await Address.create(address)
  res.redirect(`/users/edit/${UserId}`)
});

conn
//.sync({ force:true })
.sync()
.then(() => {
  app.listen(8000, () => {
    console.log('Servidor rodando na porta http://localhost:8000')
  })
}).catch((err) => console.log(err));

