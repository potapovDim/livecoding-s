import {BaseElement} from './base.element';

class InputElement extends BaseElement {
  constructor(element, id) {
    super(element, id);
  }

  async get() {
    return this.elRoot.getAttribute('value');
  }
}

export {
  InputElement
}
