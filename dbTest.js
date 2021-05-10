const Prices = require('./models/Prices')
const Types = require('./models/Types')

function typesEntry(){
    Types.create({
        type: "neapolitan"
    })
}

typesEntry()