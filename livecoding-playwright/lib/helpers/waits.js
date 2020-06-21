
/**
 *
 * @param {playwright page} page
 * @returns {object<{waitVisibility: () => Promise<void>}>}
 */
function waits(page) {
  return {
    waitVisibility: (selector) => page.waitForSelector(selector, {state: 'attached', timeout: 1000})
  }
}

module.exports = {
  waits
}
