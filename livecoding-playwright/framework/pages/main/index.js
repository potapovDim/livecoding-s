const {LoginFragment} = require('./fragments/login');
const {RegisterFragment} = require('./fragments/register');
const {HeaderFragment} = require('./fragments/header');
const {decoratePage} = require('../../../lib');

class MainPage {

  constructor(page, pageRootSelector = '#main_page') {

    this.page = page
    this.rootSelector = pageRootSelector;

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
decoratePage(MainPage);

module.exports = {
  MainPage
}