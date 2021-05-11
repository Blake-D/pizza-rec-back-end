const express = require('express')
const router = express.Router()
const Prices = require('../models/Prices')
const Types = require('../models/Types')

require('dotenv').config()

router.get('/prices', (req, res) => {
    Prices.find({})
        .then(priceData => res.send(priceData))
})

router.get('/types', (req, res) => {
    Types.find({})
        .then(typeData => res.send(typeData))
})

module.exports = router