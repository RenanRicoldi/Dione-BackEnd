const {  Router  } = require('express')

const User = require('./controllers/User')
const Library = require('./controllers/Library')

const routes = Router()

routes.use('/user', User)
routes.use('/library', Library)

module.exports = routes