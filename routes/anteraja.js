"use strict"

const { getAddress, getInfo } = require('../handler/anteraja.handler')
const response = require('../utils/WebResponse')
const group = `anteraja`

const routes = (app) => {
    app.route(`/${group}`).get(function(req, res) {
        res.status(200).send(response(200, 'Route untuk kurir anter aja', {
            METHOD_GET: [`${group}/getAddress?q={nama_kota}`],
            METHOD_POST: [{
                url: `${group}/getInfo`,
                body: {
                    origin: 'district_code dari /getAddress',
                    destination: 'district_code dari /getAddress',
                },
                ContentType: 'application/json;charset=UTF-8'
            }]
        }))
    })

    app.route(`/${group}/getAddress`).get(async function(req, res) {
        const result = await getAddress(req)
        res.status(200).send(response(200, 'Route untuk get data kota kurir anter aja', result))
    })

    app.route(`/${group}/getInfo`).post(async function(req, res) {
        const result = await getInfo(req)
        res.status(200).send(response(200, 'Route untuk get data ongkir kurir anter aja', result))
    })
}

module.exports = routes


















