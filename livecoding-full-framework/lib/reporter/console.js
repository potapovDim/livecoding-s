// @ts-check
const {seleniumWD} = require('promod');
const {browser} = seleniumWD;

function stepConsole(stepName, action, ..._args) {
  console.log(stepName)
  return action();
}

async function attachFailedApplicationCoditionConsole(_stepName) {
  const currentUrl = await browser.getCurrentUrl();
  const localStorage = await browser.executeScript('return JSON.stringify(localStorage);');
  console.log(currentUrl, localStorage)
}

module.exports = {
  stepConsole,
  attachFailedApplicationCoditionConsole,
}