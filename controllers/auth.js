const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const user = require("../models/user")
const keys = require("../config/default.json")

module.exports.login = async function(req, res) {
    const candidate = await user.findOne({NumberOfTicket: req.body.NumberOfTicket})

    if(candidate) {
        const token = ({
            objectId: candidate._id,
            NumberOfTicket: candidate.NumberOfTicket,
            train: candidate.train,
            user: candidate.user,
            price: candidate.price
        })
        res.status(200).json({token: token})
    } else {
        res.status(404).json({message: "Такого билета не существует."})
    }
}