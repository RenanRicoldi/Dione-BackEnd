const path = require('path')
const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')

const transport = nodemailer.createTransport({
    host: process.env.HostMail,
    port: process.env.PortMail,
    auth: {
      user: process.env.UserMail,
      pass: process.env.PassMail
    }
})
transport.use('compile', hbs({
  viewEngine: 'express-handlebars',
    dirPath: './',
  
}))

module.exports = transport