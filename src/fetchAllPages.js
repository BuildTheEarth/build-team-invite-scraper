/** @type {(url: RequestInfo, init?: RequestInit) => Promise<Response>} */
const fetch = require("node-fetch")
const cheerio = require("cheerio")

/**
 * @param {string} url
 * @returns {Promise<string[]>}
 */
module.exports = async function fetchAllPages(url) {
    const firstPage = await fetch(url).then(res => res.text())
    const $ = cheerio.load(firstPage)
    const pageCount = Number($("div.pagination > a:last-child").text())
    const pages = [firstPage]

    for (let page = 2; page <= pageCount; page++) {
        const body = await fetch(url + `?page=${page}`).then(res => res.text())
        pages.push(body)
    }

    return pages
}
