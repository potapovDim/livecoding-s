import {provider} from '../framework';

const {it} = provider.test();
const {expect, browser} = provider.pages();

describe('Main page', function() {

  beforeEach(async () => {
    await browser.goto('http://localhost:4000/');
  })

  afterEach(async () => {
    await browser.close();
  })

  it("Login", async function() {
    const mainPage = provider.main();
    const tablePage = provider.table();
    await mainPage.loginToSystem('admin', 'admin');
    expect(await tablePage.getHeaderTitle()).to.includes('valera');
  })
})
