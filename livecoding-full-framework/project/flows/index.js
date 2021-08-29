// @ts-check
const {prettifyCamelCase} = require('sat-utils');
const mainFlows = require('./main');
const tablesFlows = require('./tables');
const adminFlows = require('./admin');
const {step} = require('../../lib');

const initFlows = {
  ...mainFlows,
  ...tablesFlows,
  ...adminFlows
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