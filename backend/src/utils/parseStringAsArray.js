module.exports = function parseStringAsArray(stringAsArray) {
    return stringAsArray.split(',').map(tech => tech.trim());
}