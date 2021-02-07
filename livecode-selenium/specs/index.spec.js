const {Browser, $, until, By, Key} = require('../lib')

describe('Example usage', function() {

  const searchGoogleField = $(By.css('body')).$(By.name('q'))
  const browser = new Browser();

  afterEach(async () => {
    await browser.close()
  })

  it('first spec', async function() {
    let str = ''
    for(let i = 0; i < 500; i++) {
      str+= 'a'
    }
    console.log(str)
    await browser.get('http://www.google.com/ncr');
    await searchGoogleField.sendKeys(str, Key.RETURN);
    await browser.wait(until.titleIs('webdriver - Google Search'), 1000);
  })
})
