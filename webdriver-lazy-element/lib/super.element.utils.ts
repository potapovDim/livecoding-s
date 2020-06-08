import {Element, ElementArray} from 'webdriverio';

const lazyInterface = ['_$', '_$$', 'get'];


interface IElement extends Element {
  _$(selector: string): IElement;
  _$$(selector: string): IElementArray;
}

interface IElementArray extends ElementArray {
  get(index: number): IElement
}

class LazyElements {
  private selector: string;
  private initParent: Function;
  private index: number
  private parent: any
  private currentElement: any;

  constructor(selector, initParent?, index = 0) {
    this.index = index;
    this.initParent = initParent;
    this.selector = selector;
  }

  _$(selector: string) {
    return startChainig$$(selector, this._getCurrentElements.bind(this))
  }

  _$$(selector: string) {
    return startChainig$$(selector, this._getCurrentElements.bind(this))
  }

  get(index: number) {
    const costyl = function() {
      if (this.parent) {
        return this.parent
      } else if (this.initParent) {
        return this.initParent()
      }
      console.trace()
      throw new Error('This is proval')
    }
    return startChainig$$(this.selector, costyl.bind(this), index)
  }

  async _getCurrentElements() {
    if (this.currentElement) {
      console.log('Less time, we are using current element')
      return this.currentElement;
    }

    if (this.initParent) {
      this.parent = await this.initParent()
      const collection = await this.parent.$$(this.selector);
      this.currentElement = collection[this.index];
    } else {
      const collection = await $$(this.selector);
      this.currentElement = collection[this.index];
    }
    if (!this.currentElement) {
      let errorMessage = `${this.selector} with index ${this.index} was not found`

      if (this.parent) {
        errorMessage = `${this.parent.selector} does not have child ${this.selector} with index ${this.index}`
      }
      throw new Error(errorMessage)
    }

    return this.currentElement;
  }
}

function startChainig$$(selector, initParent = null, index = 0): IElement {
  const lazyElements = new LazyElements(selector, initParent, index)

  return new Proxy(lazyElements, {
    get(target, propName) {
      if (lazyInterface.includes(propName as string)) {
        return (...args) => target[propName](...args);
      } else {
        return (...args) => target._getCurrentElements().then((el) => {
          return el[propName].call(el, ...args)
        })
      }
    }
  }) as any;
}

const _$ = (selector): IElement => startChainig$$(selector);
const _$$ = (selector): IElementArray => startChainig$$(selector) as any;

export {
  _$,
  _$$
}
