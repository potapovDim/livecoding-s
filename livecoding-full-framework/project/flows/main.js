// @ts-check
const {pageProvider} = require('../pages/provider')

const {main} = pageProvider

/**
 * @param {object} userData
 * @param {string} [userData.username]
 * @param {string} [userData.password]
 * @returns {Promise<void>}
 */
async function loginToSystem(userData = {}) {
  await main.click({header: {signIn: null}});
  await main.sendKeys({login: userData})
  await main.click({login: {sighIn: null}});
}

/**
 * @param {object} userData
 * @param {string|number} [userData.username] username
 * @param {string|number} [userData.personalname] personalname
 * @param {string|number} [userData.email] email
 * @param {string|number} [userData.password] password
 * @returns {Promise<void>}
 */
async function registerInSystem(userData = {}) {
  await main.click({header: {signUp: null}});
  await main.sendKeys({register: userData})
  await main.click({register: {sighUp: null}})
}

module.exports = {
  loginToSystem,
  registerInSystem,
}