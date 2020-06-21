const {decoratePage} = require('../../../../lib');

class HeaderFragment {
  constructor(page, rootFragmentSelector = '.main_header') {
    this.page = page
    this.rootSelector = rootFragmentSelector;
  }

  get login() {
    return this.page.$('.user_buttons button:nth-child(1)')
  }
  get register() {
    return this.page.$('.user_buttons button:nth-child(2)')
  }

  async toLogin() {
    await (await this.login).click()
  }

  async toRegister() {
    await (await this.register).click()
  }
}
decoratePage(HeaderFragment)


module.exports = {
  HeaderFragment
}