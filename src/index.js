require('dotenv/config')
require('./database')
const express = require('express')
const route = require('./routes')

const app = express()

app.use(express.json())

app.use(route)

app.listen(process.env.PORT)
console.log(`Server Started Port: ${process.env.PORT}`)