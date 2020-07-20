const User = require('../../database/User')
const tocken = require('../Utils/TockenLog')

module.exports = {
    async create(req, res) {
        const { name, email, password } = req.body
        if(!name || !req.body.name)
        return res.status(400).json({ "error": "nome não existe" })
        if(!email || !req.body.email)
        return res.status(400).json({ "error": "email não existe" })
        if(!password || !req.body.password)
        return res.status(400).json({ "error": "senha não existe" })

        const userEmail = await User.exists({email})
        if(userEmail)
        return res.status(400).json({"error": "Email, já cadastrado"})

        const user = await User.create({
            name,
            email,
            password,
        })
        user.password = undefined
      
        const tockens = token({ id: user.id })

        res.json({user, tockens})
    },

    async index(req, res) {
        const {name, email } = req.body

        res.json({users})
    },

    async delete(req, res) {
        const delet = await User.findByIdAndDelete(req.body.id)
        res.json({delet})
    },
}