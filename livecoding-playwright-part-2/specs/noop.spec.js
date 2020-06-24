const {expect} = require('chai');
const {chromium} = require('playwright');
const {pageProvider} = require('../framework');

describe('Noop spec', function() {
  let browser = null;
  let page = null;

  beforeEach(async () => {
    browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('http://localhost:4000');
  })

  afterEach(async () => {
    await browser.close();
  })

  it('login', async function() {
    const mainPage = pageProvider(page).main();
    const tablesPage = pageProvider(page).tables();
    await mainPage.login('admin', 'admin');
    expect(await tablesPage.getPageHeaderTitleContent()).to.includes('admin');
  })

  it('register', async function() {
    const mainPage = pageProvider(page).main();
    const tablesPage = pageProvider(page).tables();
    await mainPage.register('admin1', 'admin1', 'admin1@admin1.com', 'admin1');
    expect(await tablesPage.getPageHeaderTitleContent()).to.includes('admin1')
  })
})