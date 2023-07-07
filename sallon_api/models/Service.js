const db = require('./db')

const Service = db.sequelize.define('services',{
    name :  {
        type : db.Sequelize.STRING
    },
    price : {
        type : db.Sequelize.DECIMAL
    }
})

// Service.prototype.testMethod = () => {
//     console.log('teste funcion')
// }


  



module.exports = Service
// Service.sync({force:true})