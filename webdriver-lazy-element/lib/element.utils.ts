import {Element, ElementArray} from 'webdriverio';

interface IElement extends Element {
  _$(selector: string): IElement;
  _$$(selector: string): IElementArray;
}

interface IElementArray extends ElementArray {
  get(index: number): IElement
}

const lazy = ['_$', '_$$', 'get', '$', '$$']

function _$(selector: string | number, parentHandler?): IElement {
  async function getCurrentElement() {
    if (parentHandler && typeof selector === 'number') {
      const parentsList = await parentHandler();
      return parentsList[selector]
    }

    if (parentHandler) {
      const parent = await parentHandler() as Element;
      console.log('Call from parent')
      return parent.$(selector as string);
    } else {
      console.log('call as parent')
      return $(selector as string);
    }
  }

  return new Proxy({}, {
    get(_t, value) {
      if (value === '$$') {
        return (selector) => _$$(selector, getCurrentElement);
      }
      if (value === '_$$') {
        return (selector) => _$$(selector, getCurrentElement);
      }
      if (lazy.includes(value as string)) {
        return (_selector) => _$(_selector, getCurrentElement);
      } else {
        return (...args) => getCurrentElement().then((el) => el[value].call(el, ...args));
      }
    }
  }) as IElement;
}

function _$$(selector, parentHandler?): IElementArray {

  async function getCurrentElement() {
    if (parentHandler) {
      const parent = await parentHandler() as Element;
      return parent.$$(selector);
    } else {
      return $$(selector);
    }
  }

  return new Proxy({}, {
    get(_t, value) {
      if (lazy.includes(value as string)) {
        return (_selector) => _$(_selector, getCurrentElement)
      } else {
        return (...args) => getCurrentElement().then((el) => el[value](...args));
      }
    }
  }) as IElementArray;
}

export {
  _$,
  _$$,
  IElement,
  IElementArray
}
