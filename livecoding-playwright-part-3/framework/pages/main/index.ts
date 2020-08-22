import {LoginFragment} from './fragments/login';
import {RegisterFragment} from './fragments/register';
import {HeaderFragment} from './fragments/header';
import {BasePage} from '../../../lib';

class MainPage extends BasePage {
  loginFragment;
  registerFragment;
  headerFragment;
  constructor(page, pageRootSelector = '#main_page') {
    super(page, pageRootSelector)
    this.loginFragment = new LoginFragment(page);
    this.registerFragment = new RegisterFragment(page);
    this.headerFragment = new HeaderFragment(page);
  }

  async login(username, password) {
    // TODO should be refactored
    await this.headerFragment.toLogin();
    await this.loginFragment.login(username, password)
  }

  async register(name, username, email, password) {
    // TODO should be refactored
    await this.headerFragment.toRegister();
    await this.registerFragment.register(name, username, email, password)
  }
}

export {
  MainPage
}