import {MainPage} from '../framework/pages'

describe('webdriver.io page', () => {
  it('should have the right title', async () => {
    await browser.url('http://localhost:3000')
    await new MainPage().login('admin', 'admin');
  })
})