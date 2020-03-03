
require ("dotenv").config()
const express = require('express')
const massive = require('massive')
const cors = require('cors')
const controller = require("./controller")

const app = express()

app.use(express.json())
app.use(cors())

const { SERVER_PORT, CONNECTION_STRING } = process.env

massive (CONNECTION_STRING)
    .then(dbObj => {
        app.set('db', dbObj)
    })
    .catch(err => console.log(err))



// ENDPOINTS HERE

app.get(`/api/inventory`, controller.displayProducts)


app.listen(SERVER_PORT, () => {
    console.log(`Server listening on ${SERVER_PORT}`)
})