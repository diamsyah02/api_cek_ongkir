"use strict"

const PORT = 9000
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const response = require('./utils/WebResponse')
const RouteAnterAja = require('./routes/anteraja')
const RouteSicepat = require('./routes/sicepat')

app.use(cors())
app.listen(PORT)
console.log('RESTful API server started on: ' + PORT)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.route(`/`).get(function(req, res) {
    res.status(200).send(response(200, 'Rest Api Cek Ongkir', {
        anteraja: '/anteraja',
        sicepat: '/sicepat',
    }))
})
RouteAnterAja(app)
RouteSicepat(app)