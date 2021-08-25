// @ts-check
class BaseFragment {
  /**
   * @param {import('promod').PromodSeleniumElementType} root fragment root
   * @param {string} name fragment name
   */
  constructor(root, name) {
    this.root = root;
    this.name = name;
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
      await this[key].click();
    }
  }

  async get(data) {
    const dataKeys = Object.keys(data)
    const getData = {...data};
    for(const key of dataKeys) {
      getData[key] = await this[key].getText();
    }
    return getData;
  }
}

module.exports = {
  BaseFragment
}