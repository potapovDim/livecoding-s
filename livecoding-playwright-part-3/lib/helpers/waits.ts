
/**
 *
 * @param {playwright page} page
 * @returns {object<{waitVisibility: () => Promise<void>}>}
 */
export function waits(page) {
  return {
    waitVisibility: (selector) => page.waitForSelector(selector, {state: 'attached', timeout: 1000})
  }
}
