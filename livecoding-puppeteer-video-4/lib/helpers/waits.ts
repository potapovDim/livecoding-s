import {logger} from './logger'
const {TECH_INFO} = process.env;

const waits = {
  waitForVisible: async (ctx, timeout) => {
    const {page, selector} = ctx;
    if (TECH_INFO) {
      logger.spaceYellow(`Wait ${selector} during ${timeout} ms`);
    }
    await page.waitForSelector(selector, {visible: true, timeout})
  }
}

export {
  waits
}
