require('ts-node').register({
  project: './tsconfig.json'
});

module.exports = require('./framework/config/protractor.conf.ts')