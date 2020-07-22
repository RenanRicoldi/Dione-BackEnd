const bcrypt = require('bcryptjs')

const Library = require('../../database/Library')
const token = require('../Utils/TockenLog')
module.exports = {
    async index (req, res) {
        const { email, password } = req.body

        const library = await Library.findOne({ email }).select('+password')

        if(!library)
        return res.status(400).json({ "error": "Email invalido" })
    
        if(!await bcrypt.compare(password, Library.password))
        res.status(400).json({"error": "Senha invalida"})

        res.json({token: token({ id: user.id }) })
    },

    async resPassword(req, res) {
        const { email } = req.body
        const library = await Library.findOne({ email })

        if(!library)
            return res.status(400).json({"error": "email não cadastrado"})

        const tockenReset = crypto.randomBytes(20).toString('hex')

        const now = new Date()
        now.setHours(now.getHours() +1)

        await Library.findByIdAndUpdate(library.id, {
        '$set': {
                ResetPass: tockenReset,
                DateResetPass: now,
        }
        })

        res.json(tockenReset)
    },
}