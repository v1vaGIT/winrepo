const express = require('express')
const bcrypt = require('bcrypt')
const config = require('../config/default.json')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const User = require('../models/authModels')
const router = express.Router()

router.post('/register', [check('email', 'Некорректный email').isEmail(), check('password', 'Минимальная длина пароля 6 символов').isLength({min: 6})] ,async (req, res) => {
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array(), message: 'Некорректные данные при регистрации'})
        }

        const {email, password} = req.body
        const candidate = await User.findOne({email})

        if (candidate) {
            return res.status(400).json({message: 'Такой пользователь уже существует'})
        }
        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({email, password: hashedPassword})
        await user.save()
        res.status(201).json({message: 'Пользователь создан'})
    } catch (e) {
        res.status(500).json({message: 'Упс... Что-то пошло не так.'})
    }
})

router.post('/login', [check('email', 'Введите корректные email').normalizeEmail().isEmail(), check('password', 'Введите пароль').exists()], async (req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({errors:errors.array(), message: 'Некорректные данные при входе'})
        }
        const {email, password} = req.body
        const user = await User.findOne({email})
        if(!user) {
            return res.status(400).json({message:'Упс... Что-то пошло не так.'})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({message: 'Неверный пароль, попробуй снова.'})
        }
        const token = jwt.sign(
            {userId: user.id},
            config.get('jwtSecret'),
            {expiresIn: '1h'}
        )
        res.json({token, userId:user.id})
    } catch (e) {
        res.status(500).json({message: 'Упс... Что-то пошло не так.'})
    }
})

module.exports = router






// const authModels = require("../models/authModels")
// const keys = require("../config/default.json")

// // Адрес роута: localhost:5000/api/auth/loginTickets
// router.post('http:/localhost:5000/api/auth/loginTickets', async (req, res) => {
//     try {
//         const candidate = await authModels.findOne({NumberOfTicket: req.body.NumberOfTicket})
//         if(candidate) {
//             const api = ({
//                 objectId: candidate._id,
//                 NumberOfTicket: candidate.NumberOfTicket,
//                 user: candidate.user,
//             })
//             res.status(200).json({api: api})
//         } else {
//             res.status(404).json({message: "Такого билета не существует."})
//         }
//     } catch (e) {
//         res.status(500).json({message: "Упс... Что-то пошло не так."})
//     }
// })

// // Адрес роута: localhost:5000/api/auth/loginPassport
// router.post('/loginPassport', async (req, res) => {
//     try {
//         const candidate = await authModels.findOne({passport: req.body.passport})
//         if(candidate) {
//             const api = ({
//                 objectId: candidate._id,
//                 NumberOfTicket: candidate.NumberOfTicket,
//                 user: candidate.user,
//                 passport: candidate.passport
//             })
//             res.status(200).json({api: api})
//         } else {
//             res.status(404).json({message: "Такого паспорта нет в базе."})
//         }
//     } catch (e) {
//         res.status(500).json({message: "Упс... Что-то пошло не так."})
//     }
// })

