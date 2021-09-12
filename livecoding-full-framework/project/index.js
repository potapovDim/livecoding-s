// @ts-check
const {client, it} = require('../lib');
const {I} = require('./flows');
const {adminCreds} = require('./application');

it.initFixtures({adminCreds});


const provider = {
  get client() {
    return client
  },
  get I() {
    return I
  },
  get testRunner() {
    return {it}
  }
}

module.exports = {
  provider
}