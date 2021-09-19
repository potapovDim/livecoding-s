// @ts-check
const {isNull} = require('sat-utils');
const {Collection} = require('./collection');
class BaseFragment {
  /**
   * @param {import('promod').PromodSeleniumElementType} root fragment root
   * @param {string} name fragment name
   */
  constructor(root, name) {
    this.root = root;
    this.name = name;
  }

  /**
   * @param {string} selector css/xpath/js selector
   * @param {string} name child name
   * @param {new (...args: any[]) => any} child child element constructor
   * @param  {any[]} rest rest required argument
   * @returns
   */
  init(selector, name, child, ...rest) {
    // TODO add technical logging
    return child === Collection
      ? new child(this.root.$$(selector), name, ...rest)
      : new child(this.root.$(selector), name, ...rest);
  }

  async sendKeys(data) {
    const dataKeys = Object.keys(data)
    for(const key of dataKeys) {
      await this[key].sendKeys(data[key]);
    }
  }

  async click(data) {
    const dataKeys = Object.keys(data)
    for(const key of dataKeys) {
      await this[key].click(data[key]);
    }
  }

  async get(data) {
    const dataKeys = Object.keys(data)
    const getData = {...data};
    for(const key of dataKeys) {
      // TODO add technical logging
      getData[key] = await this[key].get(data[key]);
    }
    return getData;
  }

  async isDisplayed(data) {
    if(isNull(data)) {
      return this.root.isDisplayed();
    }
    const dataKeys = Object.keys(data)
    const getData = {...data};
    for(const key of dataKeys) {
      // TODO add technical logging
      getData[key] = await this[key].isDisplayed(data[key]);
    }
    return getData;
  }

  async isRequiredItem(data) {
    const dataKeys = Object.keys(data)
    for(const key of dataKeys) {
      const result = await this[key].isRequiredItem(data[key]);
      if(!result) {
        return false;
      }
    }
    return true;
  }
}

module.exports = {
  BaseFragment
}