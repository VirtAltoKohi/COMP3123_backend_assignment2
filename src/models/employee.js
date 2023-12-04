const { Decimal128 } = require('mongodb')
const mongoose = require('mongoose')
const { float } = require('webidl-conversions')

const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        length: 100
    },
    lastName: {
        type: String,
        required: true,
        length: 50
    },
    email: {
        type: String,
        unique: true,
        length: 50
    },
    gender: {
        type: String,
        length: 25
    },

    salary: {
        type: Decimal128,
        required: true
    }
})

module.exports = mongoose.model("employee", employeeSchema)