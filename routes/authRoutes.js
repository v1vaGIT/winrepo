const { Router } = require('express')
const config = require('config')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')
const authentication = require('../models/authentication')
const router = Router()

router.post(
    '/authenticationOne',
    [
        check('tickets', 'Введите номер билета.'),
        check('phone', 'Введите номер телефона.')
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные при входе.'
                })
            }

            const { tickets, phone } = req.body

            const userOne = await authentication.findOne({ tickets })

            if (!userOne) {
                return res.status(400).json({ message: 'Введены неверные данные.' })
            }

            const isMatchOne = await compare(phone, user.phone)

            if (!isMatchOne) {
                return res.status(400).json({ message: 'Введены неверные данные.' })
            }

            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSecret'),
                { expiresIn: '1h' }
            )

            res.json({ token, userId: user.id })

        } catch (e) {
            res.status(500).json({ message: "Упс... Что-то пошло не так." })
        }
    })

router.post(
    '/authenticationTwo',
    [
        check('passport', 'Введите данные паспорта.'),
        check('phone', 'Введите номер телефона.')
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные при входе.'
                })
            }

            const { passport, phone } = req.body

            const userTwo = await authentication.findOne({ passport })

            if (!userTwo) {
                return res.status(400).json({ message: 'Введены неверные данные.' })
            }

            const isMatchTwo = await compare(phone, user.phone)

            if (!isMatchTwo) {
                return res.status(400).json({ message: 'Введены неверные данные.' })
            }

            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSecret'),
                { expiresIn: '1h' }
            )

            res.json({ token, userId: user.id })

        } catch (e) {
            res.status(500).json({ message: "Упс... Что-то пошло не так." })
        }
    })

module.exports = router