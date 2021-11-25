const mongoose = require('mongoose')
const Schema = mongoose.Schema
const lesson = new Schema({
    for: String,
    label: String,
    createAt: {type: Date, default: Date.now()},
    data: [{keyword: String, mean: String}]
})

module.exports = mongoose.model('lesson', lesson)