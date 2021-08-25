// @ts-check
const {seleniumWD} = require('promod');
const {$} = seleniumWD;

class BasePage {
  /**
   * @param {string} selector page root selector
   * @param {string} name page name
   */
  constructor(selector, name) {
    this.selector = selector;
    this.name = name;
    this.root = $(this.selector);
  }

  /**
   * @param {string} selector css/xpath/js selector
   * @param {string} name child name
   * @param {new (...args: any[]) => any} child child element constructor
   * @param  {any[]} rest rest required argument
   * @returns
   */
  init(selector, name, child, ...rest) {
    return new child(this.root.$(selector), name, ...rest);
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
      getData[key] = await this[key].get(data[key]);
    }
    return getData;
  }
}

module.exports = {
  BasePage
}