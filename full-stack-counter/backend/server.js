const express = require('express')
const dotenv = require('dotenv')
const counterData = require('./data/counterData')

dotenv.config();
const app = express()

app.get('/', (req, res) => {
    res.send('API is running....')
})

app.get('/api/counter', (req, res) => {
    res.json(counterData)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))