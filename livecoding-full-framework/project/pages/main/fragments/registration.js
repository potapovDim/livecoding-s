// @ts-check
const {BaseFragment} = require('../../../../lib');

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
    this.username = this.root.$(`input[placeholder="Ім'я користувача"]`);
    this.personalname = this.root.$(`input[placeholder="Ім'я"]`);
    this.email = this.root.$(`input[placeholder="Імейл"]`);
    this.password = this.root.$(`input[placeholder="пароль"]`);
    this.sighUp = this.root.$('.btn.btn-primary');
  }
}

module.exports = {
  RegistrationFragment
}
