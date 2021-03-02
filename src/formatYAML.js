module.exports = function formatYAML(object) {
    return Object.entries(object)
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n")
}
