import {_$, IElement, IElementArray, _$$} from '../../lib'

class MainPage {
  private root: IElement;
  private headerNavigateToRegisterButton: IElement;
  private headerNavigateToLoginButton: IElement;
  private username: IElement;
  private password: IElement;
  private subminLogin: IElement;

  public constructor() {
    this.root = _$('#main_page')
    this.headerNavigateToRegisterButton = this.root._$('.user_buttons button:nth-child(2)')._$('.header');
    this.headerNavigateToLoginButton = this.root._$('.user_buttons button:nth-child(1)');
    this.username = this.root._$$('.login_form input').get(0);
    this.password = this.root._$$('.login_form input').get(1);
    this.subminLogin = this.root._$('.login_form button');
  }

  async navigeteToRegister(): Promise<void> {
    return this.headerNavigateToRegisterButton.click();
  }

  async navigeteToLogin(): Promise<void> {
    return this.headerNavigateToLoginButton.click();
  }

  async login(username, password) {
    await this.username.setValue(username);
    await this.password.setValue(password);
    await this.subminLogin.click();
  }
}

export {
  MainPage
}
