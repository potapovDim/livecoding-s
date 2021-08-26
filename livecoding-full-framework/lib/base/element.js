// @ts-check
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
    return this.root.getText();
  }
}

module.exports = {
  BaseElement
}
