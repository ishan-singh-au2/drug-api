const express = require('express')
const app = express()
const db = require('./db.json')

app.use(express.json())

app.get('/api/get-drug-classes', (req, res) => {
    res.json({ data: db.medications })
})

const listener = app.listen(8080, _ => console.log(`server running on ${listener.address().port}`))