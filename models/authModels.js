const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ticketSchema = new Schema({
    NumberOfTicket: {type: String, required: true},
    user: {type: Array, required: true},
    links: [{ type: mongoose.Types.ObjectId, ref: 'Link'}]
})

module.exports = mongoose.model('ticket', ticketSchema)