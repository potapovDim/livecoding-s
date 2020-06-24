const {decoratePage, BaseFragment, $element} = require('../../../../lib');

class HeaderFragment extends BaseFragment {
  constructor(page, rootFragmentSelector = '.main_header') {
    super(page, rootFragmentSelector)
    this.login = $element(this.page, '.user_buttons button:nth-child(1)')
    this.register = $element(this.page, '.user_buttons button:nth-child(2)')
  }

  async toLogin() {
    await this.login.click()
  }

  async toRegister() {
    await this.register.click()
  }
}
decoratePage(HeaderFragment)


module.exports = {
  HeaderFragment
}