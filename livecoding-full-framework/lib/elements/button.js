// @ts-check
const {BaseElement} = require('../base/element')


class Button extends BaseElement {
  constructor(root, name) {
    super(root, name);
  }

  async sendKeys(data) {
    throw new TypeError(`Button ${this.name} can not execute sendKeys`);
  }
}

module.exports = {
  Button
}