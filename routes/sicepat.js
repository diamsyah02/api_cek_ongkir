"use strict"

const { getAddressOrigin, getAddressDestination, getInfoOngkir, checkResi } = require('../handler/sicepat.handler')
const response = require('../utils/WebResponse')
const group = `sicepat`

const routes = (app) => {
    app.route(`/${group}`).get(function(req, res) {
        res.status(200).send(response(200, 'Route untuk kurir sicepat', {
            METHOD_GET: [
                `${group}/getAddressOrigin?q={nama_kota}`,
                `${group}/getAddressDestination?q={nama_kota}`,
                `${group}/checkResi?resi={no_resi}`,
            ],
            METHOD_POST: [{
                url: `${group}/getInfoOngkir`,
                body: {
                    origin: 'origin_code dari /getAddressOrigin',
                    destination: 'destination_code dari /getAddressDestination',
                    lebar: 'angka dalam bentuk cm',
                    panjang: 'angka dalam bentuk cm',
                    tinggi: 'angka dalam bentuk cm',
                    berat: 'angka dalam bentuk kg',
                },
                ContentType: 'application/json;charset=UTF-8'
            }]
        }))
    })

    app.route(`/${group}/getAddressOrigin`).get(async function(req, res) {
        const result = await getAddressOrigin(req)
        res.status(200).send(response(200, 'Route untuk get data kota kurir sicepat', result))
    })

    app.route(`/${group}/getAddressDestination`).get(async function(req, res) {
        const result = await getAddressDestination(req)
        res.status(200).send(response(200, 'Route untuk get data kota kurir sicepat', result))
    })
    
    app.route(`/${group}/checkResi`).get(async function(req, res) {
        const result = await checkResi(req)
        res.status(200).send(response(200, 'Route untuk cek resi kurir sicepat', result))
    })

    app.route(`/${group}/getInfoOngkir`).post(async function(req, res) {
        const result = await getInfoOngkir(req)
        res.status(200).send(response(200, 'Route untuk get data ongkir kurir sicepat', result))
    })
}

module.exports = routes