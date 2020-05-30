const { Router } = require('express')

const User = require('./UserController')
const UserTocken = require('./TockenControllers')

const routes = Router()

routes.post('/register', User.create)
routes.put('/editar', User.index)
routes.delete('/delete', User.delete)

routes.post('/autheticate', UserTocken.index)
routes.post('/forgot_password', UserTocken.resPassword)

module.exports = routes