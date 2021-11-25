const mongoose = require('mongoose')
const lesson = require('./lesson')
const Schema = mongoose.Schema

const users = new Schema({
    username: {
        type: String,
        minlength: 5
    },
    password: {
        type: String,
        minlength: 5
    },
    createAt:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('users', users)