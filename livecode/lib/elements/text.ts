import {BaseElement} from './base.element';

class TextElement extends BaseElement {
  constructor(element, id) {
    super(element, id);
  }

  async sendKeys() {
    throw new Error(`${this.elName} is text, text does not have sendKeys`);
  }
}

export {
  TextElement
}
