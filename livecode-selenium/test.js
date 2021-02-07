const {By, Key, until} = require('selenium-webdriver');
const {Browser} = require('./lib/browser')
const {$} = require('./lib/element');

example()
async function example() {

  const searchGoogleField = $(By.css('body')).$(By.name('q'))

  const browser = new Browser();

  try {
    await browser.get('http://www.google.com/ncr');
    await searchGoogleField.sendKeys('webdriver', Key.RETURN);
    await browser.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await browser.close();
  }
};