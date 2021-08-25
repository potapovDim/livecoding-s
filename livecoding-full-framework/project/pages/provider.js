// @ts-check
const pageProvider = {
  get main() {
    const {getMain} = require('./main/page')
    return getMain();
  },
  get tables() {
    const {getTables} = require('./tables/page')
    return getTables();
  }
}

module.exports = {
  pageProvider
}