// @ts-check
const {provider} = require('../project')

const {client, I} = provider;

describe('Login form', () => {
  it('[P] Success login', async () => {
    const userData = {password: 'admin', username: 'admin'};
    await client.get('http://localhost:4000/')
    await I.loginToSystem(userData)
    await I.checkThatUserLoggedInSystem(userData.username);
  })

  it.only('[N] Failed login', async () => {
    const userData = {password: 'admin21321421', username: 'admin21321421'};
    await client.get('http://localhost:4000/')
    await I.loginToSystem(userData)
    await I.checkThatAfterFailedLoginFieldsAreFilled(userData);
  })
})