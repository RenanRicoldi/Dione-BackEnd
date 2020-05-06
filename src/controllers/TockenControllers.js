const bcrypt = require('bcryptjs')
const crypto = require('crypto')

const User = require('../database/User')
const token = require('./Utils/TockenLog')
const mailer = require('../Modules/mailer')
module.exports = {
    async index(req, res) {
        const { email, password } = req.body

        const user = await User.findOne({ email }).select('+password')

        if(!user)
        return res.status(400).json({ "error": "Email não cadastrado" })
    
        if(!await bcrypt.compare(password, user.password))
        res.status(400).json({"error": "Senha invalida"})

       

        res.json({token: token({ id: user.id }) })
    },

    async resPassword(req, res) {
        const { email } = req.body;
        try {
            const user = await User.findOne({ email })

            if(!user)
                return res.status(400).json({"error": "email não cadastrado"})

            const tockenReset = crypto.randomBytes(20).toString('hex')

            const now = new Date()
            now.setHours(now.getHours() +1)

            await User.findByIdAndUpdate(user.id, {
            '$set': {
                    ResetPass: tockenReset,
                    DateResetPass: now,
            }
            })

            mailer.sendMail({
                to: email,
                from: 'miguelcoruj@coruj.com',
                subject: 'Test',
                template: 'auth/forgot_password',
                context: { tockenReset },
            }, (err) => {
                if (err) {
                    console.log(err)
                    return res.status(400).json({"error": "Não foi possível mandar o email!"})
                }

                return res.status(200)
            })
        } catch (err) {
            console.log(err)
            res.status(400).json({"error": "Erro ao recuperar senha tente novamente mais tarde!"})
        }
    },
}