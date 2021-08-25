// @ts-check
const mainFlows = require('./main');
const tablesFlows = require('./tables');
const {prettifyCamelCase} = require('sat-utils');

const initFlows = {
  ...mainFlows,
  ...tablesFlows
}

Object.keys(initFlows).forEach((flowFnName) => {
  const prettyName = prettifyCamelCase(flowFnName);
  const fn = initFlows[flowFnName];
  initFlows[flowFnName] = async function(...args) {
    // TODO add logger/reporting system
    console.log(`I ${prettyName}`)

    return fn.call(this, ...args);
  }
})

const I = {
  ...initFlows
}

module.exports = {
  I
}