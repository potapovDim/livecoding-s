// @ts-check
const {BaseFragment, Input, Button, Checkbox} = require('../../../../lib');

/**
 * @typedef {object} UserFormCommonAction
 * @property {null} [username] username
 * @property {null} [personalname] personalname
 * @property {null} [email] email
 * @property {null} [password] password
 * @property {null} [create] create
 */

/**
 * @typedef {object} UserFormGetResAction
 * @property {string} [username] username
 * @property {string} [personalname] personalname
 * @property {string} [email] email
 * @property {string} [password] password
 * @property {string} [create] create
 * @property {boolean} [isAdmin] isAdmin
 */

/**
 * @typedef {object} UserFormSendKeysAction
 * @property {string|number} [username] username
 * @property {string|number} [personalname] personalname
 * @property {string|number} [email] email
 * @property {string|number} [password] password
 * @property {boolean} [isAdmin] isAdmin
 */

class UserFormFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.username = this.init(`input[placeholder="Ім'я користувача"]`, 'Username field', Input);
    this.personalname = this.init(`input[placeholder="Ім'я"]`, 'Personal name field', Input);
    this.email = this.init(`input[placeholder="Імейл"]`, 'Email field', Input);
    this.password = this.init(`input[placeholder="Пароль"]`, 'Password field', Input);
    this.isAdmin = this.init('input[type="checkbox"]', 'Is admin checkbox', Checkbox)
    this.create = this.init('.btn.btn-primary', 'Sign Up button', Button);
  }
}

module.exports = {
  UserFormFragment
}
