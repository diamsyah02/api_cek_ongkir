"use strict"

const BASE_URL = `https://anteraja.id/api/trackparcel`

const getAddress = async (req) => {
    try {
        return await (await fetch(`${BASE_URL}/getSuggestion?keyword=${req.query.q}`)).json()
    } catch (e) {
        return e
    }
}

const getInfo = async (req) => {
    try {
        const body = {
            origin: req.body.origin,
            destination: req.body.destination,
        }
        return await (await fetch(`${BASE_URL}/getRates`, {
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

module.exports = {
    getAddress,
    getInfo
}