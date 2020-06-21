const {decoratePage} = require('../../../../lib');

class LoginFragment {
  constructor(page, rootFragmentSelector = '.login_form') {
    this.page = page
    this.rootSelector = rootFragmentSelector;
  }

  async login(username, password) {
    // TODO should be refactored
    await this.page.fill('.login_form .modal .form-group:nth-child(1) input', username)
    await this.page.fill('.login_form .modal .form-group:nth-child(2) input', password)
    await this.page.click('.login_form .modal button')
  }
}
decoratePage(LoginFragment)

module.exports = {
  LoginFragment
}