/**
 * @param {string} name
 * @returns {string}
 */
module.exports = function normalizeName(name) {
    return name
        .replace(/(BTE|Build ?The ?Earth)\s*[-:|_]?\s*/i, "")
        .replace(/\s*Minecraft Earth\s*/i, "")
        .replace(/\s*(Build)? ?Team\s*/i, "")
        .replace(/\s*1:1\s*/, "")
        .replace(/\s*\(.+\)\s*/, "")
        .replace(/\s*USA?^/, "")
        .toLowerCase()
}
