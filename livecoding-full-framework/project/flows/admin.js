// @ts-check
const {expect} = require('assertior')
const {pageProvider} = require('../pages/provider')

const {admin} = pageProvider

/**
 * @param {object} userData
 * @param {string|number} [userData.username] username
 * @param {string|number} [userData.personalname] personalname
 * @param {string|number} [userData.email] email
 * @param {string|number} [userData.password] password
 * @param {boolean} [userData.isAdmin] isAdmin
 * @returns {Promise<void>}
 */
async function createNewUserOnAdminPage(userData) {
  await admin.click({togglers: {newUser: null}})
  await admin.sendKeys({userForm: userData});
  await admin.click({userForm: {create: null}});
}

/**
 * @param {string} username
 */
async function checkThatUserInUsersList(username) {
  await admin.click({togglers: {usersList: null}})
  const {usersList: {users}} = await admin.get({usersList: {users: {action: {username: null}}}})
  expect(users.some((item) => item.username === username)).toEqual(true, 'User was found');
}

/**
 * @param {object} messageData
 * @param {boolean} [messageData.open] open
 * @param {string} [messageData.username] username
 * @param {string} [messageData.content] content
 * @param {boolean} [messageData.send] send
 */
async function answerOnMessage({open = true, username, send = true, ...messageData}) {
  if(open) await admin.click({footer: {openForm: null}});
  if(username) await admin.click({messageForm: {sessions: {action: {username: null}, username: {_element: username}}}})
  await admin.sendKeys({messageForm: messageData});
  if(send) await admin.click({messageForm: {send: null}});
}

module.exports = {
  createNewUserOnAdminPage,
  checkThatUserInUsersList,
  answerOnMessage,
}