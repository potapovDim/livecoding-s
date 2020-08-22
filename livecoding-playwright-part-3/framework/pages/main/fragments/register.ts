import {BaseFragment, $element} from '../../../../lib';

class RegisterFragment extends BaseFragment {

  name;
  username;
  email;
  password;
  submit;

  private id: string;

  constructor(page, rootFragmentSelector = '.registration_form') {
    super(page, rootFragmentSelector)

    this.id = 'Register fragment';

    this.name = $element(this.page, '.registration_form .modal .form-group:nth-child(1) input', 'Name field');
    this.username = $element(this.page, '.registration_form .modal .form-group:nth-child(2) input', 'User name filed');
    this.email = $element(this.page, '.registration_form .modal .form-group:nth-child(3) input', 'Email field');
    this.password = $element(this.page, '.registration_form .modal .form-group:nth-child(4) input', 'Password filed');
    this.submit = $element(this.page, '.registration_form .modal button', 'Submit button');
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


export {
  RegisterFragment
}
