const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/cica', (req, res) => res.send('Hello Cica!'))

app.listen(3000)