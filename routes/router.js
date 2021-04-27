const express = require('express')
const router = express.Router()
const userControllers = require('../controllers/userControllers')

const {cargarNuevoUsuario, loguearUsuario} = userControllers

router.route('/user/signUp')
.post(cargarNuevoUsuario)

router.route('/user/signIn')
.post(loguearUsuario)

module.exports = router