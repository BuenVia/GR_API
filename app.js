const express = require('express')
const bodyParser = require('body-parser')

const coreOtaData = require('./core-ota')
const vrbo = require('./vrbo')

const app = express()
let port = 9000

app.get('/api', (req, res) => {
    const p = req.query
    
    if (p.models === "Health and Safety - Ref") {
        try {
            res.send(coreOtaData)
        } catch (error) {
            res.send(error)
        }
    }
    
    if (p.models === "H&S VRBO Model - REF") {
        try {
            res.send(vrbo)
        } catch (error) {
            res.send(error)
        }
    }

})

app.listen(port, () => console.log(`App is running on port ${port}`))