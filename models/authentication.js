const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    passport: { type: String, required: true },
    tickets: { type: String, required: true },
    phone: { type: String, required: true },
    links: [{ type: Types.ObjectId, ref: 'Link' }]
})

module.eports = model('authentication', schema)