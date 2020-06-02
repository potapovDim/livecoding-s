import {BaseElement} from './base.element';

class ButtonElement extends BaseElement {
  constructor(element, id) {
    super(element, id);
  }

  async sendKeys() {
    throw new Error(`${this.elName} is button, button does not have sendKeys`);
  }
}

export {
  ButtonElement
}