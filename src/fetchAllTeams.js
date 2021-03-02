/** @type {(url: RequestInfo, init?: RequestInit) => Promise<Response>} */
const fetch = require("node-fetch")
const cheerio = require("cheerio")

/**
 * @param {string} page
 * @returns {Promise<string[]>}
 */
module.exports = async function fetchAllTeams(page) {
    const $ = cheerio.load(page)
    const urls = Array.from($("a:contains(Open)")).map(e => e.attribs.href)
    const teams = []

    for (const url of urls) {
        const id = url.match(/(\d+)\/?$/)[1]
        console.log(`Fetching team ${id}...`)
        const body = await fetch(url).then(res => res.text())
        teams.push(body)
    }

    return teams
}
