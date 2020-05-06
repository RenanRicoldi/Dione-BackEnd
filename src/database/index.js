const mongoose = require('mongoose')

mongoose.connect(process.env.BD,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:  true,
    useFindAndModify: false
})