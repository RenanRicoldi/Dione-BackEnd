const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    Title: {
        type: String, 
        required: true
    },
    Author: {
        type: String,
        required: true
    },
    Editor: {
        type: String,
        required: true
    },
    urlBook: String,
    Libray: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Librays'
    },
    Tag: {
        type: String,
        required: true
    }
})

const Book = mongoose.model('Books', BookSchema)

module.exports = Book