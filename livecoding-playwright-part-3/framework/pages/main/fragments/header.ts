import {BaseFragment, $element} from '../../../../lib';

class HeaderFragment extends BaseFragment {
  login;
  register;
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


export {
  HeaderFragment
}