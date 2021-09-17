const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use('/api/auth', require('./routes/authRoutes'))

const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {

        })
    } catch (e) {
        console.log('Упс... Что-то пошло не так.', e.message)
        process.exit(1)
    }
}

start()

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))