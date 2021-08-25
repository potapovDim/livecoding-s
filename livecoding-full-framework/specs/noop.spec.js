// @ts-check
const {provider} = require('../project')

const {client, I} = provider;

describe('test', () => {
  it('test it', async () => {
    const userData = {password: 'admin', username: 'admin'};
    await client.get('http://localhost:4000/')
    await I.loginToSystem(userData)
    await I.checkThatUserLoggedInSystem(userData.username);
  })
})