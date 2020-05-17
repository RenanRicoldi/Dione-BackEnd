const bcrypt = require('bcryptjs')
const crypto = require('crypto')

const User = require('../../database/User')
const token = require('../Utils/TockenLog')
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
        const { email } = req.body
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

        res.json(tockenReset)
    },
    async LogTocken(req, res) {
        
    }
}