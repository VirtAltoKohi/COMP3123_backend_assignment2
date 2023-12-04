const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        index: true,
        length: 50
    },
    email: {
        type: String,
        unique: true,
        length: 50
    },
    password: {
        type: String,
        length: 50
    },
})

module.exports = mongoose.model("user", userSchema)