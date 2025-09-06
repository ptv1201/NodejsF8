const mongoose= require('mongoose')
const Schema = mongoose.Schema

const Course = new Schema({
    name: String,
    imagine: String, 
    video: String,
    note: String,
    nomalizeName: String,
})
module.exports = mongoose.model('Course',Course)