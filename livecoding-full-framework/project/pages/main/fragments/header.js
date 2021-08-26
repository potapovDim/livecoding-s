// @ts-check
const {BaseFragment, Button} = require('../../../../lib')

/**
 * @typedef {object} HeaderCommonAction
 * @property {null} [signIn] signIn
 * @property {null} [signUp] signUp
 */

class HeaderFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.signIn = this.init('button:nth-child(1)', 'Sign In button', Button)
    this.signUp = this.init('button:nth-child(2)', 'Sign Up button', Button)
  }
}

module.exports = {
  HeaderFragment
}