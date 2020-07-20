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
    }
}