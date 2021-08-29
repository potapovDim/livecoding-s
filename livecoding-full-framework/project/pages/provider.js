// @ts-check
const pageProvider = {
  get main() {
    const {getMain} = require('./main/page')
    return getMain();
  },
  get tables() {
    const {getTables} = require('./tables/page')
    return getTables();
  },
  get admin() {
    const {getAdmin} = require('./admin/page');
    return getAdmin();
  }
}

module.exports = {
  pageProvider
}