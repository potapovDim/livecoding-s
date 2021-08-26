// @ts-check
const {ContentType} = require('allure-js-commons')

function stepAllure(stepName, action, ...args) {
  const {allure} = require('allure-mocha/runtime');
  return allure.step(stepName, async () => {
    if(args.length) {
      allure.attachment(`${stepName} entry args`, JSON.stringify(args, null, '\t'), ContentType.JSON)
    }
    const result = await action();
    if(result) {
      allure.attachment(`${stepName} execution result`, JSON.stringify(result, null, '\t'), ContentType.JSON)
    }
    return result
  })
}

module.exports = {
  stepAllure,
}