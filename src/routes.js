const {  Router  } = require('express')

const User = require('./controllers/UserController')
const tocken = require('./controllers/TockenControllers')

const routes = Router()

routes.post('/register', User.create)
routes.put('/editar', User.index)
routes.delete('/delete', User.delete)

routes.post('/autheticate', tocken.index)
routes.post('/forgot_password', tocken.resPassword)

module.exports = routes