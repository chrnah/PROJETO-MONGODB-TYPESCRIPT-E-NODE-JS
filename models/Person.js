const mongoose = require('mongoose')

const Person = mongoose.model('Person', {
    name: String,
    email: String,
    password: Number,
})

module.exports = Person