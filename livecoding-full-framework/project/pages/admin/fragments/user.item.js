// @ts-check
const {BaseFragment, Button, Text} = require('../../../../lib')

/**
 * @typedef {object} UserItemCommonAction
 * @property {null} [username] username
 * @property {null} [details] details
 */

/**
 * @typedef {object} UserItemGetResAction
 * @property {string} [username] username
 * @property {string} [details] details
 */

class UserItemFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.username = this.init(`.user_item_username`, 'New user', Text);
    this.details = this.init(`button`, 'Users list', Button)
  }

  async isRequiredItem(data) {
    const thisResult = await this.get({...data});
    console.log(thisResult, data)
    return Object.keys(data).every(key => thisResult[key] === data[key])
  }
}

module.exports = {
  UserItemFragment
}