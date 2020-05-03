const User = require('../database/User')

module.exports = {
    async create(req, res) {
        const { name, email, password } = req.body
        if(!name)
        res.status(400).json({ "error": "nome não existe" })
        if(!email)
        res.status(400).json({ "error": "email não existe" })
        if(!password)
        res.status(400).json({ "error": "senha não existe" })

        const user = await User.create({
            name,
            email,
            password,
        })

        res.json({user})
    },
}