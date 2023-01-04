const express = require('express');
const app = express();
const mongoose = require('mongoose');
const AppointmentService = require('../Agendamento/services/AppointmentService');
const appointmentService = require('../Agendamento/services/AppointmentService');

app.use(express.static('public'));
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/agendamento')

app.get('/', (req,res) => {
  res.render('index');
});

app.get('/cadastro', (req,res) => {
  res.render('create')
});

app.post('/create', async (req,res) => {
  
 var status = await appointmentService.create(
    req.body.name,
    req.body.email,
    req.body.description,
    req.body.cpf,
    req.body.date,
    req.body.time
    )

    if(status){
      res.redirect('/');
    }else{
      res.send('Ocorreu uma falha!');
    }
})

app.get('/getcalendar',async (req,res) => {

  var consultas = await AppointmentService.GetAll(false);
  res.json(consultas)
});

app.listen(8080, () => {

  console.log('Servidor rodando na porta http://localhost:8080/cadastro')
}); 