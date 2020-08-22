import {waits} from './helpers';
import * as  chalk from 'chalk';
import {initStepDeclarator} from 'assertior';
const {ALLURE} = process.env;


declare const allure;

function allureStep(stepAssertionName: string, error, expected, current) {
  const step = allure.startStep(stepAssertionName);

  if (expected) {
    allure.attachment('Expected value', JSON.stringify(expected, null, 2), 'application/json');
  }
  if (current) {
    allure.attachment('Current value', JSON.stringify(current, null, 2), 'application/json');
  }

  if (error) {
    allure.attachment('Error', JSON.stringify(error, null, 2), 'application/json');
  }
  step.step.stepResult.status = error ? 'broken' : 'passed';
  step.endStep();
}

async function allureInterfaceStep(stepName, cb) {
  const step = allure.startStep(stepName);

  try {
    const result = await cb();

    if (result) {
      allure.attachment('Step result', JSON.stringify(result, null, 2), 'application/json');
    }

    step.step.stepResult.status = 'passed';
    step.endStep();

    return result;
  } catch (error) {
    allure.attachment('Error', JSON.stringify(error, null, 2), 'application/json');
    step.step.stepResult.status = 'broken';
    step.endStep();
    throw error;
  }
}

if (ALLURE) {
  initStepDeclarator(allureStep);
}

/**
 *
 * @param {function Constructor context} page
 */
function decoratePage(pageOrFramgent) {
  const name = pageOrFramgent.id || pageOrFramgent.__proto__.constructor.name;

  const requiredToDecorate = Object.getOwnPropertyNames(pageOrFramgent.__proto__)
    .filter(prop => {
      if (prop !== 'constructor' && (typeof pageOrFramgent.__proto__[prop]).includes('function')) {
        return true
      }
      return false
    })

  requiredToDecorate.forEach(prop => {
    const originalProp = pageOrFramgent.__proto__[prop]
    pageOrFramgent.__proto__[prop] = async function(...args) {
      /**
       * @example
       * every page should have rootSelector
       * this selector will be used for wait visibility of current page
      */
      let message = `${name} execute ${prop}`;

      if (name.includes('Fragment')) {
        message = `\t${message}`;
      }

      async function currentCall(...currentCallArgs) {
        await waits(this.page).waitVisibility(this.rootSelector)
        return originalProp.call(this, ...currentCallArgs);
      }

      if (ALLURE) {

        return allureInterfaceStep(message, currentCall.bind(this, ...args));
      }

      console.log(chalk.green(message))

      return currentCall.call(this, ...args);
    }
  })
}

export {
  decoratePage,
  allureInterfaceStep
}

