const helpers = require('./helpers')
const pageConditions = require('./page.conditions')
const basePage = require('./base.page.implementation')
const baseFragment = require('./base.fragment.implementation')
const elements = require('./elements')

module.exports = {
  ...helpers,
  ...pageConditions,
  ...basePage,
  ...baseFragment,
  ...elements
}
