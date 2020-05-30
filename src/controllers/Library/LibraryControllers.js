const Library = require('../../database/Library')

module.exports = {
    async create(req, res) {
        const { email, name, password, urlSoon } = req.body

        if(!email || !req.body.email)
        res.status(400).json({"error": "email não existe"})
        if(!name || !req.body.name)
        res.status(400).json({"error": "nome não existe"})
        if(!password || !req.body.password)
        res.json({"error": "senha não existe"})
        if(!urlSoon || !req.body.urlSoon)
        res.json({"error": "URL da foto não existe"})

        const library = await  Library.create({
            email,
            name,
            password,
            urlSoon,
        })

        if(!library)
        res.status(400).json({"error": "email já existe"})

        user.password = undefined

        res.json({library})
    }
}