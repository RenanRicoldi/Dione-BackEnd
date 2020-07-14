const { Router } = require('express')

const User = require('./UserController')
const UserTocken = require('./TockenControllers')

const TokenAuth = require('../Utils/TokenAuth')

const routes = Router()

routes.post('/register', User.create)
routes.post('/autheticate', UserTocken.index)
routes.post('/forgot_password', UserTocken.resPassword)

routes.use(TokenAuth)

routes.put('/editar', User.index)
routes.delete('/delete', User.delete)

module.exports = routes