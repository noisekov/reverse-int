module.exports = function reverse (number) {
    return +Math.abs(number).toString().split('').reverse().join('')
}
