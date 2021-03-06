const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const LibrarySchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        unique: true,
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
    urlSoon: String,
    books: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Books'
    }
})

LibrarySchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash

    next()
})

const Libray = mongoose.model('Librays', LibrarySchema)

module.exports = Libray