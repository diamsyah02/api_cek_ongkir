"use strict"

const { getAddress, getInfoOngkir, checkResi } = require('../handler/lionparcel.handler')
const response = require('../utils/WebResponse')
const group = `lionparcel`

const routes = (app) => {
    app.route(`/${group}`).get(function(req, res) {
        res.status(200).send(response(200, 'Route untuk kurir lion parcel', {
            METHOD_GET: [
                `${group}/getAddress?q={nama_kota}`,
                `${group}/getInfoOngkir?origin={asal_kota (district_code dari /getAddress)}&?destination={tujuan_kota (district_code dari /getAddress)}&weight={angka berat (kg)}`,
                `${group}/checkResi?resi={no_resi}`
            ],
        }))
    })

    app.route(`/${group}/getAddress`).get(async function(req, res) {
        const result = await getAddress(req)
        res.status(200).send(response(200, 'Route untuk get data kota kurir lion parcel', result))
    })

    app.route(`/${group}/getInfoOngkir`).get(async function(req, res) {
        const result = await getInfoOngkir(req)
        res.status(200).send(response(200, 'Route untuk get data ongkir kurir lion parcel', result))
    })

    app.route(`/${group}/checkResi`).get(async function(req, res) {
        const result = await checkResi(req)
        res.status(200).send(response(200, 'Route untuk cek resi kurir lion parcel', result))
    })
}

module.exports = routes