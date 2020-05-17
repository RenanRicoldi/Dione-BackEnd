const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const LibraySchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    ResetPass: {
        type: String,
        select: false,
    },
    DateResetPass: {
        type: Date,
        select: false,
    },
    urlSoon: URL,
    books: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Books'
    }
})

LibraySchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash

    next()
})

const Libray = mongoose.model('Librays', LibraySchema)

module.exports = Libray