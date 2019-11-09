const express = require('express')
const app = express()
const db = require('./db.json')

app.use(express.json())

app.get('/api/get-drug-classes', (req, res) => {
    res.json({ data: db.medications })
})

app.get('/api/get-single-drug-class/:drugClass', (req, res) => {
    res.json({ data: db.medications[0][req.params.drugClass] })
})


const listener = app.listen(8080, _ => console.log(`server running on ${listener.address().port}`))