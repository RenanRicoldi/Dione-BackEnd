const Library = require('../../database/Library')

module.exports = {
    async create(req, res) {
        const { email, name, password, urlSoon } = req.body

        if(!email || !req.body.email)
        return res.status(400).json({"error": "email não existe"})
        if(!name || !req.body.name)
        return res.status(400).json({"error": "nome não existe"})
        if(!password || !req.body.password)
        return res.status(400).json({"error": "senha não existe"})
        if(!urlSoon || !req.body.urlSoon)
        return res.status(400).json({"error": "URL da foto não existe"})
        
        const library = await  Library.create({
            email,
            name,
            password,
            urlSoon,
        }).catch(res.status(400).json({"error": "email já existe"}))

        user.password = undefined

        res.json({library})
    },
}