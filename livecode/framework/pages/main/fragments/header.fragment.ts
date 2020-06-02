import {ButtonElement, BaseFragmentInterface} from '../../../../lib';

class HeaderFragment extends BaseFragmentInterface {
  private login: ButtonElement;
  private register: ButtonElement;

  constructor(rootEl, name = HeaderFragment.name) {
    super(rootEl, name);
    this.login = this.initChild(ButtonElement, '.user_buttons button:nth-child(1)', 'Login button');
    this.register = this.initChild(ButtonElement, '.user_buttons button:nth-child(2)', 'Register button');
  }
}

export {
  HeaderFragment
}