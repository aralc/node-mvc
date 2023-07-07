const express = require('express')
const handlebars = require('express-handlebars')

const bodyParser = require('body-parser')
const Service = require('./models/Service')

const app = express()

// COnfig 
// Template Engine 
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'master',
}))
app.set('view engine','handlebars')
// fim template engine 



// configure body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

// rotas 

app.get('/cad',(req,res) => {
    res.render("form")
})

app.post('/model/store',(req,res) => {
    console.log(req.body)
    Service.create({
        name : req.body.name,
        price : req.body.price
    }).then(function(serivece)
    {
        return res.redirect('/list/service')
    }).catch(function(error){
        return res.send(error)
    })

})

app.get('/list/service',(req,res) => {

//    console.log(Service.findAll())
    Service.findAll().then(data => {


        const context = {
            dataServices: data.map(dataService => {
              return {
                name: dataService.name,
                price: dataService.price
              }
            })
          }

        return res.render('list',{dataServices: context.dataServices })
    }).catch(error => {
        return res.send(error)
    })
    
})

app.get('/index',(req,res) => {
    console.info(__dirname)
    res.sendFile(__dirname + "/html/index.html")
})

app.get("/",(req,res) => {
    res.send("ola")
})

app.get("/sobre", (req,res) => {
    res.send("sobre")
});

app.get("/oi/:nome", (req,res) => {
    console.log(req.params)
    res.send(`oi ${req.params.nome}`)
})


// última função do código.
app.listen(8888,() => {
    console.log('Online')
})