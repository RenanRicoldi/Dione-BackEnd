const User = require('../../database/User')
const tocken = require('../Utils/TockenLog')

module.exports = {
    async create(req, res) {
        const { name, email, password } = req.body
        if(!name || !req.body.name)
        res.status(400).json({ "error": "nome não existe" })
        if(!email || !req.body.email)
        res.status(400).json({ "error": "email não existe" })
        if(!password || !req.body.password)
        res.status(400).json({ "error": "senha não existe" })

        const user = await User.create({
            name,
            email,
            password,
        }).catch(res.status(400).json({"error": "email já existe"}))

        user.password = undefined
      
        const tockens = token({ id: user.id })

        res.json({user, tockens})
    },

    async index(req, res) {
        const users = await User.find()

        res.json({users})
    },

    async delete(req, res) {
        const delet = await User.findByIdAndDelete(req.body.id)
        res.json({delet})
    },
}