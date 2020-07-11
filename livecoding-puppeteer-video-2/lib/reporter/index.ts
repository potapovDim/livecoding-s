import {stepAllure} from './allure';
import {stepConsole} from './console';
const {REPORTER} = process.env;


function step(stepName, isTechInfo = false) {
  if (REPORTER === 'allure') {
    return stepAllure(stepName, isTechInfo);
  } else {
    return stepConsole(stepName, isTechInfo);
  }
}

export {
  step
}