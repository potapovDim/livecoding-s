import {stepLog} from './console';

function step(stepName: string | Function) {
  return function(_target, _name, descriptor) {

    const originalValue = descriptor.value;

    descriptor.value = function(...args) {

      stepName = '\n' + ((typeof stepName === 'string' ? stepName : stepName(this.name)) as string);
      if (this.constructor.name.includes('Fragment')) {
        stepName = `\t ${stepName} arguments ${JSON.stringify(args)}`
      }
      stepLog(stepName);
      return originalValue.call(this, ...args);
    }

    return descriptor;
  }
}

export {
  step
}