// @ts-check
const mainFlows = require('./main');
const tablesFlows = require('./tables');
const {prettifyCamelCase} = require('sat-utils');
const {step} = require('../../lib')

const initFlows = {
  ...mainFlows,
  ...tablesFlows
}

Object.keys(initFlows).forEach((flowFnName) => {
  const prettyName = prettifyCamelCase(flowFnName);
  const fn = initFlows[flowFnName];
  initFlows[flowFnName] = async function(...args) {
    return step(`I ${prettyName}`, () => fn.call(this, ...args), ...args);
  }
})

const I = {
  ...initFlows
}

module.exports = {
  I
}