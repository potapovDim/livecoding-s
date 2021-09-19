//@ts-check
const {BaseFragment, Text} = require('../../../../lib');


/**
 * @typedef {object} SessionItemCommonAction
 * @property {null} [username] username
 * @property {null} [session] session
 */

/**
 * @typedef {object} SessionItemGetResAction
 * @property {string|{_element: string}} [username] username
 * @property {string|{_element: string}} [session] session
 */

class SessionItemFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.username = this.init('span:nth-child(1)', 'Username', Text);
    this.session = this.init('span:nth-child(2)', 'Session', Text);
  }
}

module.exports = {
  SessionItemFragment,
}
