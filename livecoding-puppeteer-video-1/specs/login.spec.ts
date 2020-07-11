import {browser} from '../lib/browser';
import {_$} from '../lib/element';
import {MainPage} from '../framework/pages/main.page';

const mainPage = new MainPage();

describe('Main page', function() {
  beforeEach(async () => {
    await browser.goto('http://localhost:4000/');
  })
  afterEach(async () => {
    await browser.close();
  })

  it("Login", async function() {
    await mainPage.loginToSystem('admin', 'admin')
  })
})
