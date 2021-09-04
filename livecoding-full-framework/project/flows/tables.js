// @ts-check
const {isBoolean} = require('sat-utils')
const {pageProvider} = require('../pages/provider')

const {tables} = pageProvider

/**
 * @param {string} username username
 * @param {boolean} [isAdmin] isAdmin
 * @returns {Promise<void>}
 */
async function checkThatUserLoggedInSystem(username, isAdmin) {
  let greetingMessage = `Таблиці, Привіт ${username}`
  if(isBoolean(isAdmin)) {
    await tables.waitForPageState({header: {isAdminMarker: isAdmin}});
    greetingMessage += isAdmin ? '*' :''
  }
  await tables.waitForPageState({header: {greetingMessage}});
}

async function navigateToAdmin() {
  await tables.click({header: {toAdmin: null}});
}

module.exports = {
  checkThatUserLoggedInSystem,
  navigateToAdmin,
}