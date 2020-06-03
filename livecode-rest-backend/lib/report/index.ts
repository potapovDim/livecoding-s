import * as chalk from 'chalk';

function logger(message, ...args) {
  console.log(chalk.green(message), ...args)
}

/**
 *
 * @param {object} class
 */
function decorateService(target) {
  const methods = Object
    .getOwnPropertyNames(target.prototype)
    .filter((method) => method !== 'constructor')
    .filter((method) => typeof target.prototype[method] === 'function');

  methods.forEach((method) => {
    const fn = target.prototype[method];

    target.prototype[method] = function(...args) {
      logger(`${target.prototype.constructor.name} call method ${method}`);
      return fn.call(this, ...args);
    }
  })
}

export {
  logger,
  decorateService
}