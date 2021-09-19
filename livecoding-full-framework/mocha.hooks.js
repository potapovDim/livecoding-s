const {seleniumWD} = require('promod');

before(async function() {
  const {getSeleniumDriver, browser} = seleniumWD;

  await getSeleniumDriver(browser);

  global.browser = browser;
});

after(async function() {
  await global.browser.quitAll();
});