const cheerio = require("cheerio")
const normalizeName = require("./normalizeName")

/**
 * @param {string} body
 * @returns {{ name: string, invite: string }}
 */
module.exports = function getTeamData(body) {
    const $ = cheerio.load(body)
    const name = normalizeName($(".build-team-header-info > h1").text())
    const invite = $(".discord-button").attr("href")

    return { name, invite }
}
