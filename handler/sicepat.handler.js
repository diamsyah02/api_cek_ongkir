"use strict"

const BASE_URL = `https://content-main-api-production.sicepat.com/public`

const getAddressOrigin = async (req) => {
    try {
        return await(await fetch(`${BASE_URL}/delivery-fee/origin/?keyword=${req.query.q}`)).json()
    } catch (e) {
        return e
    }
}

const getAddressDestination = async (req) => {
    try {
        return await(await fetch(`${BASE_URL}/delivery-fee/destination/?keyword=${req.query.q}`)).json()
    } catch (e) {
        return e
    }
}

const getInfoOngkir = async (req) => {
    try {
        const body = {
            origin: req.body.origin,
            destination: req.body.destination,
            l: req.body.lebar,
            p: req.body.panjang,
            t: req.body.tinggi,
            weight: req.body.berat,
        }
        return await(await fetch(`${BASE_URL}/delivery-fee/fare-non-international`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(body)
        })).json()
    } catch (e) {
        return e
    }
}

const checkResi = async () => {
    try {
        return await(await fetch(`${BASE_URL}/check-awb/${req.query.resi}`)).json()
    } catch (e) {
        return e
    }
}

module.exports = {
    getAddressOrigin,
    getAddressDestination,
    getInfoOngkir,
    checkResi
}