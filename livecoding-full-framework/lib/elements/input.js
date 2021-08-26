// @ts-check
const {BaseElement} = require('../base/element')


class Input extends BaseElement {
  constructor(root, name) {
    super(root, name);
  }

  async get() {
    return this.root.getAttribute('value')
  }
}

module.exports = {
  Input
}