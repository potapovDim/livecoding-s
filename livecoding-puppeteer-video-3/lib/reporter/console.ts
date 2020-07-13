import {logger} from '../helpers';
const {TECH_INFO} = process.env;

function stepConsole(stepName: string | Function, isTechInfo: boolean = false) {
  return function(_target, propName, descriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args) {
      const caller = _target.constructor.name.includes('Page') ? 'spaceGreen' : 'tabGreen'
      const isElement = _target.constructor.name.includes('Element')
      if (isTechInfo && TECH_INFO) {
        logger.spaceYellow(typeof stepName === 'function' ? stepName(this.id) : stepName)
      } else if (!isTechInfo) {
        const endMessage = isElement && args.length
          ? `${typeof stepName === 'function' ? stepName(this.id) : stepName} args: ${JSON.stringify(args)}`
          : `${typeof stepName === 'function' ? stepName(this.id) : stepName}`
        logger[caller](endMessage)
      }

      return originalMethod.call(this, ...args);
    }

    return descriptor
  }
}

export {
  stepConsole
}