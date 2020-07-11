declare const allure: any;

function stepAllure(stepName: string | Function) {
  return function(_target, propName, descriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args) {
      return allure.step(typeof stepName === 'function' ? stepName(this.id) : stepName, () => originalMethod.call(this, ...args));
    }

    return descriptor
  }
}

export {
  stepAllure
}