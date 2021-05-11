const express = require('express')
const router = express.Router()
const Prices = require('../models/Prices')
const Types = require('../models/Types')
const Pizzarias = require('../models/Pizzarias')

require('dotenv').config()

router.get('/prices', (req, res) => {
    Prices.find({})
        .then(priceData => res.send(priceData))
})

router.get('/types', (req, res) => {
    Types.find({})
        .then(typeData => res.send(typeData))
})

router.post('/pizzarias', (req, res) => {
    console.log("receiving from back end")
    console.log(req.body.thing)
    Pizzarias.find({priceRange: req.body.thing})
        .then(pizzariaData => res.send(pizzariaData))
})

module.exports = router