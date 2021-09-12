// @ts-check
const {provider} = require('../project')

const {client, I} = provider;
const {it} = provider.testRunner;

describe('Login form', () => {

  it('[P] Success login', {tags: ['login', 'smoke']}, async ({adminCreds}) => {
    await client.get('http://localhost:4000/')
    await I.loginToSystem(adminCreds)
    await I.checkThatUserLoggedInSystem(adminCreds.username, true);
  })

  it('[N] Failed login', async () => {
    const userData = {password: 'admin21321421', username: 'admin21321421'};
    await client.get('http://localhost:4000/')
    await I.loginToSystem(userData)
    await I.checkThatAfterFailedLoginFieldsAreFilled(userData);
  })

  it('[P] Admin creates new user', async () => {
    const adminData = {password: 'admin', username: 'admin'};
    await client.get('http://localhost:4000/')
    await I.loginToSystem(adminData)
    await I.navigateToAdmin();
    await client.switchToTab({title: 'Адмінська сторінка'});
    await I.createNewUserOnAdminPage({
      username: 'test2',
      personalname: 'test2',
      email: 'test2',
      password: 'test2'
    })
    await I.checkThatUserInUsersList('test2');
    await client.returnToInitialTab();
  })
})