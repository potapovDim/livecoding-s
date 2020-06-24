const {decoratePage, BaseFragment, $element} = require('../../../../lib');

class RegisterFragment extends BaseFragment {
  constructor(page, rootFragmentSelector = '.registration_form') {
    super(page, rootFragmentSelector)
    this.name = $element(this.page, '.registration_form .modal .form-group:nth-child(1) input');
    this.username = $element(this.page, '.registration_form .modal .form-group:nth-child(2) input');
    this.email = $element(this.page, '.registration_form .modal .form-group:nth-child(3) input');
    this.password = $element(this.page, '.registration_form .modal .form-group:nth-child(4) input');
    this.submit = $element(this.page, '.registration_form .modal button')
  }

  async register(name, username, email, password) {
    // TODO should be refactored
    await this.name.type(name);
    await this.username.type(username);
    await this.email.type(email);
    await this.password.type(password)
    await this.submit.click()
  }
}
decoratePage(RegisterFragment)

module.exports = {
  RegisterFragment
}
