module.exports = function formatYAML(object) {
    return Object.entries(object)
        .map(([k, v]) => `${k.trim()}: ${v.trim()}`)
        .join("\n")
}
