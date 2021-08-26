// @ts-check
const {BaseFragment, Text, Input, Button} = require('../../../../lib')

/**
 * @typedef {object} LoginCommonAction
 * @property {null} [username] username
 * @property {null} [password] email
 * @property {null} [sighIn] sighIn
 */

/**
 * @typedef {object} LoginGetResAction
 * @property {string} [username] username
 * @property {string} [password] email
 * @property {string} [sighIn] sighIn
 */

/**
 * @typedef {object} LoginSendKeysAction
 * @property {string|number} [username] username
 * @property {string|number} [password] password
 */

class LoginFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.username = this.init(`input[placeholder="Ім'я користувача"]`, 'User name field', Input);
    this.password = this.init(`xpath=//input[@placeholder="пароль"]`, 'Password field', Input)
    this.sighIn = this.init('.btn.btn-primary', 'Sign in button', Button);
  }
}

module.exports = {
  LoginFragment
}