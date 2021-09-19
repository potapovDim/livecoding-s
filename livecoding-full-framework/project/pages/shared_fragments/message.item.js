// @ts-check
const {BaseFragment, Text} = require('../../../lib')

/**
 * @typedef {object} MessageItemCommonAction
 * @property {null} [username] username
 * @property {null} [content] content
 */

/**
 * @typedef {object} MessageItemGetResAction
 * @property {string|{_element: string}} [username] username
 * @property {string|{_element: string}} [content] content
 */

class MessageItemFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.username = this.init('.user_name', 'Message username', Text)
    this.content = this.init('.message_body_content', 'Message content', Text)
  }
}

module.exports = {
  MessageItemFragment
}