const express = require('express')
const router = express.Router()
const Prices = require('../models/Prices')

require('dotenv').config()

router.get('/prices', (req, res) => {
    Prices.find({})
        .then(priceData => res.send(priceData))
        .then(console.log("sent"))
})

module.exports = router