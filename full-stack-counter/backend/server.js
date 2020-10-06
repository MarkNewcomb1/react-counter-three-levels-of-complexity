const express = require('express')
const counterData = require('./data/counterData')
const app = express()

app.get('/', (req, res) => {
    res.send('API is running....')
})

app.get('/api/counter', (req, res) => {
    res.json(counterData)
})

app.listen(5000, console.log('Server running on port 5000'))