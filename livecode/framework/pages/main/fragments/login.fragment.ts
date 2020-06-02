import {ButtonElement, BaseFragmentInterface} from '../../../../lib';

class LoginFragment extends BaseFragmentInterface {

  constructor(rootEl, name = LoginFragment.name) {
    super(rootEl, name);
  }
}

export {
  LoginFragment
}