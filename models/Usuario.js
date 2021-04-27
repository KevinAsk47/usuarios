const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({
    nombre: String,
    mail: String,
    clave: String
})

const Usuario = mongoose.model('usuario', usuarioSchema)

module.exports = Usuario