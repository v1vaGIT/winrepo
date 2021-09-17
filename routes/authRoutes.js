const express = require('express')
const router = express.Router()

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authModels = require("../models/authModels")
const keys = require("../config/default.json")

// Адрес роута: localhost:5000/api/auth/login
router.post('/login', async (req, res) => {
    try {
        const candidate = await authModels.findOne({NumberOfTicket: req.body.NumberOfTicket})
        if(candidate) {
            const api = ({
                objectId: candidate._id,
                NumberOfTicket: candidate.NumberOfTicket,
                user: candidate.user,
            })
            res.status(200).json({api: api})
        } else {
            res.status(404).json({message: "Такого билета не существует."})
        }
    } catch (e) {
        res.status(500).json({message: "Упс... Что-то пошло не так."})
    }
})

module.exports = router