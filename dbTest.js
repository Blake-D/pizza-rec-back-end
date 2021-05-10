const Prices = require('./models/Prices')

function pricesEntry(){
    Prices.create({
        range: "$$$$$"
    })
}

pricesEntry()