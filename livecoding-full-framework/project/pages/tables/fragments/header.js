// @ts-check
const {BaseFragment, Text} = require('../../../../lib')

/**
 * @typedef {object} HeaderCommonAction
 * @property {null} [greetingMessage] greetingMessage
 */

/**
 * @typedef {object} HeaderGetResAction
 * @property {string} [greetingMessage] greetingMessage
 */

class HeaderFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.greetingMessage = this.init('h3', 'Greeting message', Text);
  }
}

module.exports = {
  HeaderFragment
}