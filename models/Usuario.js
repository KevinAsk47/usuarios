const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({
    nombre: String,
    mail: String,
    clave: String,
    foto: String,
    admin: {type: Boolean, default: false}
})

const Usuario = mongoose.model('usuario', usuarioSchema)

module.exports = Usuario