const { Router } = require('express')

const Library = require('./LibraryControllers')

const routes = Router()

routes.post('/register', Library.create)

module.exports = routes