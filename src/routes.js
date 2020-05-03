const {  Router  } = require('express')

const User = require('./controllers/UserController')

const routes = Router()

routes.post('/register', User.create)
routes.post('/login', User.index)
routes.delete('/delete', User.delete)
routes.put('/editar', User.put)

module.exports = routes