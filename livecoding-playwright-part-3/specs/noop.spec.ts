import {expect} from 'assertior';
import {pageProvider, provider} from '../framework';

describe('Noop spec', function() {
  let page = null;

  beforeEach(async () => {
    page = await provider.browser.init();
    await provider.browser.get('http://localhost:4000');
  })

  afterEach(async () => {
    await provider.browser.close();
  })

  it('login', async function() {
    const mainPage = pageProvider(page).main();
    const tablesPage = pageProvider(page).tables();
    await mainPage.login('admin', 'admin');
    expect(await tablesPage.getPageHeaderTitleContent(), 'Title should contails username').stringIncludesSubstring('admin');
  })

  it('register', async function() {
    const mainPage = pageProvider(page).main();
    const tablesPage = pageProvider(page).tables();
    await mainPage.register('admin1', 'admin1', 'admin1@admin1.com', 'admin1');
    expect(await tablesPage.getPageHeaderTitleContent(), 'Title should contails username').stringIncludesSubstring('admin1')
  })
})