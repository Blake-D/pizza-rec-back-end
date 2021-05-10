const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('sanity check')
})

app.listen(8000)