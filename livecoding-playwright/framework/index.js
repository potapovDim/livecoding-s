const {MainPage, TablesPage} = require('./pages')
const {makeSingleTon} = require('../lib')

const pageProvider = (page) => {
  return {
    main: () => makeSingleTon(MainPage, page),
    tables: () => makeSingleTon(TablesPage, page)
  }
}
module.exports = {
  pageProvider
}