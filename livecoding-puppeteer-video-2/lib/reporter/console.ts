import {logger} from '../helpers';
const {TECH_INFO} = process.env;

function stepConsole(stepName: string | Function, isTechInfo: boolean = false) {
  return function(_target, propName, descriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args) {
      const caller = _target.constructor.name.includes('Page') ? 'spaceGreen' : 'tabGreen'
      if (isTechInfo && TECH_INFO) {
        logger.spaceYellow(typeof stepName === 'function' ? stepName(this.id) : stepName)
      } else if (!isTechInfo) {
        logger[caller](typeof stepName === 'function' ? stepName(this.id) : stepName)
      }

      return originalMethod.call(this, ...args);
    }

    return descriptor
  }
}

export {
  stepConsole
}