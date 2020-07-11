function stepConsole(stepName: string | Function) {
  return function(_target, propName, descriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args) {
      console.log(typeof stepName === 'function' ? stepName(this.id) : stepName)

      return originalMethod.call(this, ...args);
    }

    return descriptor
  }
}

export {
  stepConsole
}