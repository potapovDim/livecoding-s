import {BaseElement} from './element';
import {step} from '../reporter'

class Button extends BaseElement {
  constructor({page, selector, name}: {page?: any, selector: string, name?: string}) {
    super({page, selector, name});
  }

  @step((name) => `${name} call send keys`)
  async sendKeys(value: string) {
    throw new Error('Button can not fill any value');
  }
}

export {
  Button
}
