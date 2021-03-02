/**
 * @param {string} name
 * @returns {string}
 */
module.exports = function normalizeName(name) {
    return name
        .replace(/(BTE|Build ?The ?Earth)\s*(:|-)?\s*/i, "")
        .replace(/\s*(Build)? ?Team\s*/i, "")
        .replace(/\s*1:1\s*/, "")
        .toLowerCase()
}
