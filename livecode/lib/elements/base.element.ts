import {ElementFinder} from 'protractor'
import {waiter} from '../element_utils'

class BaseElement {
  private root: ElementFinder;
  private name: string;

  constructor(element: ElementFinder, name?: string) {
    this.root = element;
    this.name = name ? name : BaseElement.name;
  }

  get elName() {
    return this.name;
  }

  get elRoot() {
    return this.root;
  }

  async click() {
    await this.waitVisible();
    await this.root.click();
  }

  async get() {
    await this.waitVisible();
    return this.root.getText();
  }

  async sendKeys(keys: string) {
    await this.waitVisible();
    await this.sendKeys(keys)
  }

  async isDisplay() {
    return (await this.root.isPresent()) && await this.root.isDisplayed();
  }

  async waitVisible() {
    await waiter.waitForVisible(this);
  }
}

export {
  BaseElement
}