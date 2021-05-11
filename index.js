require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');

app.use(cors())
app.use(express.json())

app.use(express.urlencoded({extended: false}))
app.use(bodyParser.urlencoded({ extended: false }))

// app.get('/', (req, res) => {
//     res.send('sanity check')
// })

app.use('/api', require('./controllers/api'))

app.listen(8000)