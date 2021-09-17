const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ticketSchema = new Schema({
    NumberOfTicket: {type: String, required: true},
    user: {type: Array, required: true},
})

module.exports = mongoose.model('ticket', ticketSchema)