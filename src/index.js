const fs = require("fs/promises")
const fetchAllPages = require("./fetchAllPages")
const fetchAllTeams = require("./fetchAllTeams")
const formatYAML = require("./formatYAML")
const getTeamData = require("./getTeamData")

const url = "https://buildtheearth.net/buildteams"

async function main() {
    const pages = await fetchAllPages(url)
    /** @type {string[]} */
    const teams = []
    /** @type {{ [name: string]: string }} */
    const invites = {}

    for (const page of pages) teams.push(...(await fetchAllTeams(page)))
    for (const team of teams) {
        const { name, invite } = getTeamData(team)
        if (!invite) console.log(`Team "${name}" has no invite.`)
        else invites[name] = invite
    }

    console.log("Writing to data.yml...")
    const yaml = formatYAML(invites)
    await fs.writeFile(__dirname + "/../data.yml", yaml)
}

main()
