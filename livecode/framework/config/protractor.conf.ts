import {Config, browser} from 'protractor'

const config: Config = {
  framework: 'mocha',

  seleniumAddress: 'http://localhost:4444/wd/hub',
  logLevel: 'ERROR',
  mochaOpts: {
    timeout: 35000
  },
  specs: ["./specs/**/*.spec.ts"],

  SELENIUM_PROMISE_MANAGER: false,

  onPrepare: async () => {
    await browser.waitForAngularEnabled(false);
  }
}

export {
  config
}