const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ticketSchema = new Schema({
    NumberOfTicket: {type: String, required: true},
    train: {type: Array, required: true},
    user: {type: Array, required: true},
    price: {type: String, required: true}
})

module.exports = mongoose.model('ticket', ticketSchema)