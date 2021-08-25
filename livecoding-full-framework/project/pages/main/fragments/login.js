// @ts-check
const {BaseFragment} = require('../../../../lib')

/**
 * @typedef {object} LoginCommonAction
 * @property {null} [username] username
 * @property {null} [password] email
 * @property {null} [sighIn] sighIn
 */

/**
 * @typedef {object} LoginSendKeysAction
 * @property {string|number} [username] username
 * @property {string|number} [password] password
 */

class LoginFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.username = this.root.$(`input[placeholder="Ім'я користувача"]`)
    this.password = this.root.$(`xpath=//input[@placeholder="пароль"]`)
    this.sighIn = this.root.$('.btn.btn-primary')
  }
}

module.exports = {
  LoginFragment
}