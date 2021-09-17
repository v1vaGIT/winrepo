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
            train: candidate.train
        })
        res.status(200).json({token: token})
        // const token = jwt.sign({
        //     objectId: candidate._id,
        //     NumberOfTicket: candidate.NumberOfTicket,
        //     train: candidate.train
        // }, keys.jwtSecret, {expiresIn: 60 * 60})
        // res.status(200).json({token: token})
        // if(req.body.user == candidate.phone) {
        //     const token = jwt.sign({
        //         objectId: candidate._id,
        //         NumberOfTicket: candidate.NumberOfTicket,
        //         Traint: candidate.Train
        //     }, keys.jwtSecret, {expiresIn: 60 * 60})
        //     res.status(200).json({token: token})
        // } else {
        //     res.status(401).json({message: "Введены неверные данные."})
        // }
    } else {
        res.status(404).json({message: "Такого билета не существует."})
    }
}