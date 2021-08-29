// @ts-check
const {BaseFragment, Text, Button} = require('../../../../lib')

/**
 * @typedef {object} HeaderCommonAction
 * @property {null} [greetingMessage] greetingMessage
 * @property {null} [toAdmin] toAdmin
 */

/**
 * @typedef {object} HeaderGetResAction
 * @property {string} [greetingMessage] greetingMessage
 * @property {string} [toAdmin] toAdmin
 */

class HeaderFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.greetingMessage = this.init('h3', 'Greeting message', Text);
    this.toAdmin = this.init('a[href="/admin"] button', 'To admin page', Button);
  }
}

module.exports = {
  HeaderFragment
}