const Usuario = require('../models/Usuario')

const userControllers = {
    cargarNuevoUsuario: async (req, res) => {
        const {nombre, mail, clave} = req.body

        const mailExiste = await Usuario.findOne({mail})

        var respuesta;
        var error;
    
        if (!mailExiste) {
            try {
                const usuarioGrabado = new Usuario({nombre, mail, clave})
                await usuarioGrabado.save()
                respuesta = usuarioGrabado 
            } catch {
                error = "Hubo un error en el grabado del usuario. Reintente"
            }                  
       } else {
           error = "El mail ya está en uso"
       }

       res.json({
           success: !error ? true : false,
           respuesta: respuesta,
           error: error
       })        
    },
    loguearUsuario: async (req, res) => {
        const {mail, clave} = req.body
        var respuesta;
        var error;

        const usuarioExiste = await Usuario.findOne({mail: mail})
        if (usuarioExiste && usuarioExiste.clave === clave) {
            respuesta = usuarioExiste
        } else {
            error = "Usuario y/o contraseña incorrectos"
        }

        res.json({
            success: !error ? true : false,
            respuesta: respuesta,
            error: error
        })
    }
}

module.exports = userControllers