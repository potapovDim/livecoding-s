const {setHeadlessWhen} = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './specs/**/table.spec.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true,
      windowSize: '1200x900'
    }
  },
  include: {
    I: './steps_file.js',

    mainLoginFragment: './pages/main.login.fragment.js',
    mainRegisterFragment: './pages/main.register.fragment.js',

    tableFragment: './pages/table.fragment.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'livecoding-codeceptjs',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      // TODO should be adaptive
      enabled: true
    }
  }
}