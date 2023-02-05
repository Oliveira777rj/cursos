const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodeMVC', 'root', '&',{

  host:'localhost',
  dialect:'mysql',
  logging:false
})

try {
    sequelize.authenticate()
    console.log('Estabelecido conexão com banco de dados')
} catch (error) {
  console.log(`Ocorreu um erro no banco de dados error ${error}`)
}
module.exports = sequelize