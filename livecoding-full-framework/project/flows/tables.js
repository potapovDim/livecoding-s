// @ts-check
const {expect} = require('assertior')
const {pageProvider} = require('../pages/provider')

const {tables} = pageProvider

/**
 * @param {string} username username
 * @returns {Promise<void>}
 */
async function checkThatUserLoggedInSystem(username) {
  const {header: {greetingMessage}} = await tables.get({header: {greetingMessage: null}});
  expect(greetingMessage).stringIncludesSubstring(username);
}

module.exports = {
  checkThatUserLoggedInSystem,
}