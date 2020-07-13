import {BaseElement} from './element';
// import {step} from '../reporter'

class Input extends BaseElement {
  constructor({page, selector, name}: {page?: any, selector: string, name?: string}) {
    super({page, selector, name});
  }
}

export {
  Input
}
