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
        if(password.length < 8)
        return res.status(400).json({"error": "senha que 8 caracteres"})
        if(!urlSoon || !req.body.urlSoon)
        return res.status(400).json({"error": "URL da foto não existe"})
        
        const libraryEmail = await Library.exists({email})
        if(libraryEmail)
        return res.status(400).json({"error": "Email, já cadastrado"})
        const library = await  Library.create({
            email,
            name,
            password,
            urlSoon,
        })

        if(library)
        library.password = undefined

        res.json({library})
    },
}