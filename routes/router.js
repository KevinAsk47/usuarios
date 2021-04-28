const express = require('express')
const router = express.Router()
const userControllers = require('../controllers/userControllers')
const validator = require('../config/validator')

const {cargarNuevoUsuario, loguearUsuario} = userControllers

router.route('/user/signUp')
.post(validator, cargarNuevoUsuario)

router.route('/user/signIn')
.post(loguearUsuario)

module.exports = router