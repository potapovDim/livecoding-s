import {ElementFinder, $} from 'protractor';
import {waiter} from './element_utils'
import {step} from './report'

class BasePageInterface {
  private root: ElementFinder;
  private name: string;

  constructor(element: string, name) {
    this.root = $(element);
    this.name = name ? name : BasePageInterface.name;
  }

  @step((name) => `${name} click`)
  async click(clickObj?: object) {
    if (!clickObj) {
      throw new Error(`${this.name} click argument should be an object`);
    }
    await this.waitVisible();
    for (const key of Object.keys(clickObj)) {
      if (!this[key]) {
        throw new Error(`${this.name} does not have ${key}`);
      }
      await this[key].click(clickObj[key]);
    }
  }

  @step((name) => `${name} get`)
  async get(getObj: object) {
    if (!getObj) {
      throw new Error(`${this.name} get argument should be an object`);
    }
    await this.waitVisible();
    const tempGet = {...getObj};
    for (const key of Object.keys(tempGet)) {
      if (!this[key]) {
        throw new Error(`${this.name} does not have ${key}`);
      }
      tempGet[key] = await this[key].get(tempGet[key]);
    }

    return tempGet;
  }

  @step((name) => `${name} send keys`)
  async sendKeys(sendObj: object) {
    if (!sendObj) {
      throw new Error(`${this.name} send keys argument should be an object`);
    }

    await this.waitVisible();

    for (const key of Object.keys(sendObj)) {
      if (!this[key]) {
        throw new Error(`${this.name} does not have ${key}`);
      }
      await this[key].sendKeys(sendObj[key]);
    }
  }

  @step((name) => `${name} is displayed`)
  async isDisplay(dispayObj) {
    if (dispayObj === null) {
      return (await this.root.isPresent()) && this.root.isDisplayed()
    }
    const tempDisplayed = {...dispayObj};
    for (const key of Object.keys(tempDisplayed)) {
      if (!this[key]) {
        throw new Error(`${this.name} does not have ${key}`);
      }
      tempDisplayed[key] = await this[key].isDisplay(tempDisplayed[key]);
    }
    return tempDisplayed;
  }

  async waitVisible() {
    await waiter.waitForVisible(this);
  }


  initChild(childClass, elementSelector, ...args) {
    return new childClass(this.root.$(elementSelector), ...args);
  }
}

export {
  BasePageInterface
}