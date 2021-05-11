const mongoose = require('../db/connection')

const pizzariasSchema = new mongoose.Schema({
    name: String,
    priceRange: String,
    typeServed: String
})

const Pizzarias = mongoose.model('Pizzarias', pizzariasSchema)

module.exports = Pizzarias