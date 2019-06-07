const express = require('express')
const massive = require('massive')
require('dotenv').config()
let ctrl = require('./controller')

const { SERVER_PORT, CONNECTION_STRING } = process.env

const app = express()

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
    app.listen(SERVER_PORT, console.log(`listening on port ${SERVER_PORT}`))
})

app.get('/api/inventory', ctrl.getInventory)
// app.get('/api/product/:id', ctrl.getProduct)
app.post('/api/product', ctrl.createProduct)
app.delete('/api/product/:id', ctrl.deleteProduct)


