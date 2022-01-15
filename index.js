// configuracao inicial 
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const Person = require('./models/Person')

// forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// rota inicial / endpoint
app.get('/', (req, res) => {

    // mostrar requisicao

    res.json({ message: 'Seja Bem vindo!' })
})

//mongodb+srv://APIDBA:1234@apidba.foznc.mongodb.net/APIDBA?retryWrites=true&w=majority

// entregar uma porta 
const DB_USER = 'christian'
const DB_PASSWORD = encodeURIComponent('1234')
mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apidba.foznc.mongodb.net/APIDBA?retryWrites=true&w=majority`,
    )
    .then(() => {
        console.log('Conectado ao MongoDB!')
        app.listen(3000)
    })
    .catch((err) => console.log(err))