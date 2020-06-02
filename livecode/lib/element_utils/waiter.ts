import {ExpectedConditions as EC, browser} from 'protractor';

const waiter = {
  waitForVisible: async (ctx) => {
    const {root, name} = ctx;
    await browser.wait(EC.visibilityOf(root), 5000, `${name} should be visible`);
  }
}

export {
  waiter
}
