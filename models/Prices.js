const mongoose = require('../db/connection')

const pricesSchema = new mongoose.Schema({
    range: String
})

const Prices = mongoose.model('Prices', pricesSchema)

module.exports = Prices