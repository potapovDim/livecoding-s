// @ts-check
const {BaseFragment, Input, Button} = require('../../../../lib');

/**
 * @typedef {object} RegistrationCommonAction
 * @property {null} [username] username
 * @property {null} [personalname] personalname
 * @property {null} [email] email
 * @property {null} [password] password
 * @property {null} [sighUp] sighUp
 */

/**
 * @typedef {object} RegistrationSendKeysAction
 * @property {string|number} [username] username
 * @property {string|number} [personalname] personalname
 * @property {string|number} [email] email
 * @property {string|number} [password] password
 */

class RegistrationFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.username = this.init(`input[placeholder="Ім'я користувача"]`, 'Username field', Input);
    this.personalname = this.init(`input[placeholder="Ім'я"]`, 'Personal name field', Input);
    this.email = this.init(`input[placeholder="Імейл"]`, 'Email field', Input);
    this.password = this.init(`input[placeholder="пароль"]`, 'Password field', Input);

    this.sighUp = this.init('.btn.btn-primary', 'Sign Up button', Button);
  }
}

module.exports = {
  RegistrationFragment
}
