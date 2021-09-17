const express = require('express')
const controller = require('../controllers/auth')
const router = express.Router()


// Адрес роута: localhost:5000/api/auth/login
router.post('/login', controller.login)

module.exports = router