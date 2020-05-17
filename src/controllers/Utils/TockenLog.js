const jwt = require('jsonwebtoken')

module.exports = (params = {}) => {
    return jwt.sign(
        params, 
        process.env.SecretHash, 
        { expiresIn: 2629744 }
    )
}
