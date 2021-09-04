// @ts-check
const {BasePage} = require('../../../lib')
const {HeaderFragment} = require('./fragments/header');

/**
 * @typedef {import('./fragments/header').HeaderCommonAction} HeaderCommonAction
 * @typedef {import('./fragments/header').HeaderGetResAction} HeaderGetResAction
 * @typedef {import('./fragments/header').HeaderIsDispResAction} HeaderIsDispResAction
 */

/**
 * @typedef {object} TablesPageInteractionInterface
 * @property {(data: {} ) =>  Promise<void>} sendKeys sendKeys method
 * @property {(data: {
 *  header?: HeaderCommonAction;
 * } ) =>  Promise<void>} click click method
 * @property {(data: {
 *  header?: HeaderCommonAction;
 * } ) =>  Promise<{
 *  header?: HeaderGetResAction;
 * }>} get get method
 * @property {(data: {
 *  header?: HeaderCommonAction;
 * } ) =>  Promise<{
 *  header?: HeaderIsDispResAction;
 * }>} isDisplayed click method
 * @property {(data: {
 *  header?: HeaderGetResAction|HeaderIsDispResAction;
 * } ) =>  Promise<void>} waitForPageState waitForPageState method
 */

class TablesPage extends BasePage {
  constructor() {
    super('#table_page', 'Tables page')
    this.header = this.init('.header', 'Header', HeaderFragment);
  }
}

/**
 * @returns {TablesPageInteractionInterface} interaction interface
 */
function getTables() {
  return new TablesPage()
}

module.exports = {
  TablesPage, getTables
}