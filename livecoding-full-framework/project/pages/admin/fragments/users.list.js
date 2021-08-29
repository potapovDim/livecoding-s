// @ts-check
const {BaseFragment, Collection} = require('../../../../lib')
const {UserItemFragment} = require('./user.item');

/**
 * @typedef {import('./user.item').UserItemCommonAction} UserItemCommonAction
 * @typedef {import('./user.item').UserItemGetResAction} UserItemGetResAction
 */

/**
 * @typedef {object} UserListCommonAction
 * @property {{index?: number; action: UserItemCommonAction} & UserItemGetResAction} [users] users
 */

/**
 * @typedef {object} UserListGetResAction
 * @property {UserItemGetResAction[]} [users] users
 */
class UsersListFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.users = this.init(`.user_item`, 'User item line', Collection, UserItemFragment);
  }
}

module.exports = {
  UsersListFragment
}