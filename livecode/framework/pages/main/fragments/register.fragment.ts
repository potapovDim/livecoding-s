import {ButtonElement, BaseFragmentInterface} from '../../../../lib';

class RegisterFragment extends BaseFragmentInterface {

  constructor(rootEl, name = RegisterFragment.name) {
    super(rootEl, name);
  }
}

export {
  RegisterFragment
}