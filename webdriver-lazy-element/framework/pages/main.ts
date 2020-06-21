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
    this.headerNavigateToLoginButton = this.root._$('.main_header')._$('.user_buttons')._$('button');
    this.headerNavigateToRegisterButton = this.root._$('.main_header')._$('.user_buttons button:nth-child(2)');
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

  async tenClicks() {
    for (let i = 0; i < 10; i++) {
      await this.headerNavigateToRegisterButton.click();
    }
  }

  async login(username, password): Promise<void> {
    await this.username.setValue(username);
    await this.password.setValue(password);
    await this.subminLogin.click();
  }
}

export {
  MainPage
}
