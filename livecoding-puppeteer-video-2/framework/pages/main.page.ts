import {BasePage, step, BaseElement} from '../../lib';
import {Input, Button} from '../../lib';

class MainPage extends BasePage {
  private userName: BaseElement;
  private password: BaseElement;
  private submit: BaseElement;

  constructor() {
    super('#main_page', 'Main page')
    this.userName = this.initChild(Input, 'input.form-control', 'User name field');
    this.password = this.initChild(Input, 'input[type="password"]', 'Password field');
    this.submit = this.initChild(Button, '.login_form .modal button', 'Login button');
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