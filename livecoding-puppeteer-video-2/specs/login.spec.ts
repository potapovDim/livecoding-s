import {expect} from 'chai';
import {browser} from '../lib/browser';
import {MainPage, TablePage} from '../framework/pages';

describe('Main page', function() {

  beforeEach(async () => {
    await browser.goto('http://localhost:4000/');
  })

  afterEach(async () => {
    await browser.close();
  })

  it("Login", async function() {
    const mainPage = new MainPage();
    const tablePage = new TablePage();
    await mainPage.loginToSystem('admin', 'admin');
    expect(await tablePage.getHeaderTitle()).to.includes('admin');
  })
})
