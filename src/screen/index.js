module.exports = {
    get Home() { return require('./Home/index.js').default },
    get NotFound() { return require('./NotFound/index.js').default }
}