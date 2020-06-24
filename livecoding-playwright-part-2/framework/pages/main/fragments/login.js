const {decoratePage, BaseFragment, $element} = require('../../../../lib');

class LoginFragment extends BaseFragment {
  constructor(page, rootFragmentSelector = '.login_form') {
    super(page, rootFragmentSelector)
    this.username = $element(this.page, '.login_form .modal .form-group:nth-child(1) input')
    this.password = $element(this.page, '.login_form .modal .form-group:nth-child(2) input')
    this.submin = $element(this.page, '.login_form .modal button')
  }

  async login(username, password) {
    // TODO should be refactored
    await this.username.type(username)
    await this.password.type(password)
    await this.submin.click()
  }
}
decoratePage(LoginFragment)

module.exports = {
  LoginFragment
}