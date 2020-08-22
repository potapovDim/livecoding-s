import {BaseFragment, $element} from '../../../../lib';

class LoginFragment extends BaseFragment {
  username
  password;
  submit;
  constructor(page, rootFragmentSelector = '.login_form') {
    super(page, rootFragmentSelector)
    this.username = $element(this.page, '.login_form .modal .form-group:nth-child(1) input')
    this.password = $element(this.page, '.login_form .modal .form-group:nth-child(2) input')
    this.submit = $element(this.page, '.login_form .modal button')
  }

  async login(username, password) {
    // TODO should be refactored
    await this.username.type(username)
    await this.password.type(password)
    await this.submit.click()
  }
}

export {
  LoginFragment
}