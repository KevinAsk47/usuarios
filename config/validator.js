const validator = (req, res, next) => {
    console.log("Entre al validador")
    const {nombre, mail, clave, foto} = req.body
    var errores = []
    if (nombre === '') {
        errores.push('El nombre no puede estar vacío')
    }
    if (!mail.includes('@')) {
        errores.push('El mail tiene que tener un arroba')
    }
    if (clave.length < 4) {
        errores.push('No permitimos claves de menos de 4 letras')
    }
    if (foto === '') {
        errores.push('Cargá la foto, che')
    }
    if (errores.length === 0) {
        next()
    } else {
        res.json({success: false, errores: errores})
    }
}

module.exports = validator