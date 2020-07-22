const { Router } = require('express')

const Library = require('./LibraryControllers')
const LibraryToken = require('./TokenControllers')

const routes = Router()

routes.post('/register', Library.create)
routes.post('/authenticate', LibraryToken.index)

module.exports = routes