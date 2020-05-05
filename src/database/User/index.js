const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    token: {
        type: String,
        select: false,
    },
    RecoverPass: {
        type: String,
        select: false,
    },
    DateRecover: {
        type: Date,
        select: false,
    }
})

UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash

    next()
})

const User = mongoose.model('User', UserSchema)

module.exports = User