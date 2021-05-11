const Prices = require('./models/Prices')
const Types = require('./models/Types')
const Pizzarias = require('./models/Pizzarias')

function pizzariaEntry(){
    Pizzarias.create({
        name: "Wait in Line to get Pizza",
        priceRange: "$$$$$",
        typeServed: "new york"
    })
}

pizzariaEntry()