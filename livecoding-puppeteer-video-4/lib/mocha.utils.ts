import {logger} from './helpers';
import {browser} from './browser';
import * as path from 'path';


declare const allure: any;

const {REPORTER} = process.env;

function itDecorted(itTitle, testFn) {
  it(itTitle, decorateTest(itTitle, testFn))
}

function decorateTest(itTitle, testFn) {
  return async function() {
    try {
      await testFn()
    } catch (error) {
      if (error.toString().includes('AssertionError')) {
        logger.spaceRed(`[ASSERTION:${itTitle}]`)
      } else {
        logger.spaceYellow(`[BROKEN:${itTitle}]`)
      }
      if (REPORTER === 'allure') {
        // await allure.step('Failed screen', async () => {
        const screenshot = await browser.takeScreenshot(path.resolve(process.cwd(), `./${itTitle}.failed.png`))
        allure.createAttachment(`${itTitle} failed`, screenshot, 'image/png')
        // })
      }

      throw error;
    }
  }
}


export {
  itDecorted as it
}