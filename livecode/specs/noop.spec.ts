import {browser} from 'protractor';
import {provider} from '../framework'

describe('Noop', function() {
  it('it noop', async function() {
    const page = provider.pages.main();
    await browser.get('http://localhost:3000')


    await page.click({header: {register: null}});
    await page.click({header: {login: null}});


  })
})
