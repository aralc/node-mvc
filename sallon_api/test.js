const Sequelize = require('sequelize')
const Service = require('./models/Service')
const sequelize = new Sequelize('node','root','root',{
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate()
            .then(() => {
                console.log('conectado')
            }).catch((error) => {
                console.log(error)
            })

// definindo model
const Model = sequelize.define('model', {
    nome : {
        type : Sequelize.STRING
    },
    descricao :  {
        type: Sequelize.TEXT
    }
})

// sincroniza model 
// Model.sync({force:true})

Model.create(
    {
        nome: "nome",
        descricao : "teste descrição"
    })

Service.testMethod();