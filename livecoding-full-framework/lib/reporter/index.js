// @ts-check
const {stepAllure, attachFailedApplicationCoditionAllure} = require('./allure');
const {stepConsole, attachFailedApplicationCoditionConsole} = require('./console');

const {LOG_ALL} = process.env;


/**
 * @param {string} stepName stepName
 * @param {(...args: any[]) => Promise<any>} action action
 * @param  {...any[]} restArgs rest args
 * @returns {Promise<any>} exection result
 */
function step(stepName, action, ...restArgs) {
  const {allure} = require('allure-mocha/runtime');
  if(allure) {
    return stepAllure(stepName, action, ...restArgs);
  }
  return stepConsole(stepName, action, ...restArgs)
}


/**
 *
 * @param {new (...args: any[]) => any} classToDecorate classToDecorate
 * @param {string} methodName
 * @param {(...args: any[]) => string} messageFn
 */
function decorateBase(classToDecorate, methodName, messageFn) {
  if(!LOG_ALL) {
    return;
  }

  const methodDescriptor = Object.getOwnPropertyDescriptor(classToDecorate.prototype, methodName)
  const originalMethodImplementation = methodDescriptor.value;

  const decorated = async function(...args) {
    const originalCallable = originalMethodImplementation.bind(this, ...args)
    const prettyName = messageFn(this.name);
    return step(prettyName, originalCallable, ...args);
  }

  Object.defineProperty(decorated, 'name', {value: methodName})
  methodDescriptor.value = decorated;

  Object.defineProperty(classToDecorate.prototype, methodName, methodDescriptor)
}

async function attachFailedApplicationCodition(title) {
  const {allure} = require('allure-mocha/runtime');
  if(allure) {
    return attachFailedApplicationCoditionAllure(title);
  }
  return attachFailedApplicationCoditionConsole(title);
}

module.exports = {
  step,
  decorateBase,
  attachFailedApplicationCodition
}