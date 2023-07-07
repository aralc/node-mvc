const Sequelize = require('sequelize')

// conexão banco de dados.
const sequelize = new Sequelize('node','root','root',{
    host: "localhost",
    dialect: 'mysql'
})
// fim conexão banco de dados 


module.exports = {
    Sequelize : Sequelize,
    sequelize : sequelize
}