import {BasePage, _$, step, BaseElement} from '../../lib/index';

const usernameSelector = 'input.form-control';
const passwordSelector = 'input[type="password"]';
const submitSelector = '.login_form .modal button'

class MainPage extends BasePage {
  private userName: BaseElement;
  private password: BaseElement;
  private submit: BaseElement;

  constructor() {
    super('#main_page', 'Main page')
    this.userName = _$(usernameSelector, 'User name field');
    this.password = _$(passwordSelector, 'Password field');
    this.submit = _$(submitSelector, 'Login button');
  }

  @step((name) => `${name} execute login to the system`)
  async loginToSystem(userName, password) {
    await this.userName.sendKeys(userName);
    await this.password.sendKeys(password);
    await this.submit.click()
  }
}

export {
  MainPage
}