const {getBrowserDriver} = require('./share')

class Element {
  constructor(driver, locatorBy, parent) {
    this._driver = driver;
    this.locatorBy = locatorBy;
    this._parent = parent;
  }

  get driver() {
    return this._driver;
  }

  set driver(driver) {
    this._driver = driver
  }

  async init() {
    if(this._parent && this.driver) {
      this.driver = this._parent.driver;
      this._root = this._parent._root.findElement(this.locatorBy)
    } else if(this._parent && !this.driver) {

      await this._parent.init()
      this.driver = this._parent.driver;
      this._root = this._parent._root.findElement(this.locatorBy)

    } else if(!this._parent) {
      this.driver = this.driver || getBrowserDriver()
      this._root = await this.driver.findElement(this.locatorBy)
    }
  }

  async sendKeys(...args) {
    if(this._root) {
      await this._root.sendKeys(...args)
    } else {
      await this.init()
      await this._root.sendKeys(...args)
    }
  }

  $(locatorBy) {
    return new Element(this.driver, locatorBy, this)
  }
}

function $(locatorBy) {
  return new Element(null, locatorBy)
}

module.exports = {
  $
}