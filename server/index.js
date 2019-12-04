require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())
const massive = require('massive')
const ctrl = require('./controller')
const {SERVER_PORT, CONNECTION_STRING} = process.env

app.post(`/api/products`, ctrl.create)
app.get(`/api/products`, ctrl.getProducts)
app.delete(`/api/products/:id`, ctrl.delete)

massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`Running on ${SERVER_PORT}`))
}).catch(err => console.log(err, `Can't connect to the database`))

