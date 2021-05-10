const mongoose = require('../db/connection')

const typesSchema = new mongoose.Schema({
    type: String
})

const Types = mongoose.model('Types', typesSchema)

module.exports = Types