// @ts-check
const {isObject, isPrimitive, isString, waitForCondition} = require('sat-utils');
const {seleniumWD} = require('promod');
const {decorateBase} = require('../reporter/')
const {isEqual} = require('./utils');
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

  async isDisplayed(data) {
    const dataKeys = Object.keys(data)
    const getData = {...data};
    for(const key of dataKeys) {
      getData[key] = await this[key].isDisplayed(data[key]);
    }
    return getData;
  }

  async waitForPageState(data) {
    function checkThatStringsInData(dataObj) {
      for(const key of Object.keys(dataObj)) {
        if(isObject(dataObj[key])) {
          const result = checkThatStringsInData(dataObj[key])
          if(result) {
            return true;
          }
        } else if(isPrimitive(dataObj[key]) && isString(dataObj[key])) {
          return true;
        }
      }
      return false;
    }

    const conditionToCall = checkThatStringsInData(data) ? 'get' : 'isDisplayed';

    await waitForCondition(async () => {
      const thisCallResult = await this[conditionToCall]({...data});
      return isEqual(thisCallResult, data)
    }, {timeout: 15_000, message: `${this.name} should have condition ${JSON.stringify(data)}`});
  }
}

decorateBase(BasePage, 'get', (name) => `${name} execute get`);
decorateBase(BasePage, 'click', (name) => `${name} execute click`);
decorateBase(BasePage, 'sendKeys', (name) => `${name} execute sendKeys`);
decorateBase(BasePage, 'waitForPageState', (name) => `${name} execute waitForPageState`);

module.exports = {
  BasePage
}