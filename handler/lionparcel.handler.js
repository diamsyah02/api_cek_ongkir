"use strict"

const BASE_URL = `https://api-internal-web.thelionparcel.com`
const headers = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2dyb3VwIjoiQURNSU4iLCJhY2NvdW50X2lkIjoxLCJlbWFpbCI6Imxpb25wYXJjZWxAbGlvbnBhcmNlbC5jb20iLCJleHAiOjE3MTQ1NDU0MDMsInBvc2l0aW9uIjoiU1RBRkYiLCJ1c2VybmFtZSI6Imxpb25wYXJjZWwifQ.V9el08AT_J9nRbSNzKsrLtmvcuBayEQTKd_XxTN0j1k'
}

const getAddress = async (req) => {
    try {
        return await (await fetch(`${BASE_URL}/v1/route/origin/data?q=${req.query.q}`, {
            headers: headers
        })).json()
    } catch (e) {
        return e
    }
}

const getInfoOngkir = async (req) => {
    try {
        return await (await fetch(`${BASE_URL}/v2/tariff?origin=${req.query.origin}&destination=${req.query.destination}&weight=${req.query.weight}`, {
            headers: headers
        })).json()
    } catch (e) {
        return e
    }
}

const checkResi = async (req) => {
    try {
        return await(await fetch(`${BASE_URL}/v2/track/data?q=${req.query.resi}`, {
            headers: headers
        })).json()
    } catch(e) {
        return e
    }
}

module.exports = {
    getAddress,
    getInfoOngkir,
    checkResi
}