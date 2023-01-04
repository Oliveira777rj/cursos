var appointment = require('../models/Appointment');
var monogoose = require('mongoose');

const Appo = monogoose.model('Appointment', appointment)

class AppointmentService{

  async create(name,email,description,cpf,date,time){
    var newAppo = new Appo({

      name,
      email,
      description,
      cpf,
      date,
      time,
      finished: false
    })

    try{
      await newAppo.save();
      return true;
    }catch(err){  
      console.log(err)
      return false;
    }

  } 

  async GetAll(showFinished){

    if(showFinished){
      return await Appo.find(); 
    }else{
      return await Appo.find({'finished':false})
    }
  }
};

module.exports = new AppointmentService();