const {decoratePage} = require('../../../../lib');

class RegisterFragment {
  constructor(page, rootFragmentSelector = '.registration_form') {
    this.page = page
    this.rootSelector = rootFragmentSelector;
  }

  get name() {
    return this.page.$('.registration_form .modal .form-group:nth-child(1) input');
  }

  get username() {
    return this.page.$('.registration_form .modal .form-group:nth-child(2) input');
  }

  get email() {
    return this.page.$('.registration_form .modal .form-group:nth-child(3) input');
  }

  get password() {
    return this.page.$('.registration_form .modal .form-group:nth-child(4) input');
  }

  get submit() {
    return this.page.$('.registration_form .modal button')
  }

  async register(name, username, email, password) {
    // TODO should be refactored
    await (await this.name).type(name);
    await (await this.username).type(username);
    await (await this.email).type(email);
    await (await this.password).type(password)
    await (await this.submit).click()
  }
}
decoratePage(RegisterFragment)

module.exports = {
  RegisterFragment
}
