const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const authheader = req.headers.authorization

    if(!authheader)
    return res.status(401).json({"error": "No token"})

    const partsToken = authorization.split(" ")

    if(!partsToken === 2)
    return res.status(401).json({"error": "Token Malformated"})

    const [ schema, token ] = partsToken

    if(!/^Bearer$/i.test(schema))
    return res.status(401).json({"error": "Token Malformated"})

    jwt.verify(token, process.env.SecretHash, (err, decoded) => {
        if(err) 
        return res.status(401).json({"error": "Token error"})
    
        req.userId = decoded.id;

        return next()
    })
}