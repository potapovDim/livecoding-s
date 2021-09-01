// @ts-check
const {decorateBase} = require('../reporter/')

class BaseElement {
  /**
   * @param {import('promod').PromodSeleniumElementType} root fragment root
   * @param {string} name fragment name
   */
  constructor(root, name) {
    this.root = root;
    this.name = name;
  }

  async sendKeys(data) {
    await this.root.sendKeys(data)
  }

  async click() {
    await this.root.click()
  }

  async get() {
    return (await this.root.getText()).trim();
  }
}

decorateBase(BaseElement, 'get', (name) => `${name} execute get`);
decorateBase(BaseElement, 'click', (name) => `${name} execute click`);
decorateBase(BaseElement, 'sendKeys', (name) => `${name} execute sendKeys`);

module.exports = {
  BaseElement
}
