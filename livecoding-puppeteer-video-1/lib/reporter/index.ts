import {stepAllure} from './allure';
import {stepConsole} from './console';
const {REPORTER} = process.env;


function step(stepName) {
  if (REPORTER === 'allure') {
    return stepAllure(stepName);
  } else {
    return stepConsole(stepName);
  }
}

export {
  step
}