// @ts-check
const {client} = require('../lib')
const {I } = require('./flows')

const provider = {
  get client() {
    return client
  },
  get I() {
    return I
  }
}

module.exports = {
  provider
}