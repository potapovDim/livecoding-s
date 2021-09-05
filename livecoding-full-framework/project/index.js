// @ts-check
const {client, it} = require('../lib')
const {I} = require('./flows')

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