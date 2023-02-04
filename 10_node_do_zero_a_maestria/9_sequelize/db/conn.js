const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('maestriaSequelize','root','&',{

  host:'localhost',
  dialect:'mysql',
  logging:false
})

try {
  sequelize.authenticate()
  console.log('Conectado com sucesso!')
} catch (error) {
    console.log('Não foi possivel conectar: ', error)
}

module.exports = sequelize;