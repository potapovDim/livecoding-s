// @ts-check
const {BasePage} = require('../../../lib')
const {TogglersFragment} = require('./fragments/togglers');
const {UserFormFragment} = require('./fragments/new.user');
const {UsersListFragment} = require('./fragments/users.list');

/**
 * @typedef {import('./fragments/new.user').UserFormCommonAction} UserFormCommonAction
 * @typedef {import('./fragments/new.user').UserFormSendKeysAction} UserFormSendKeysAction
 * @typedef {import('./fragments/new.user').UserFormGetResAction} UserFormGetResAction
 *
 * @typedef {import('./fragments/togglers').TogglersCommonAction} TogglersCommonAction
 * @typedef {import('./fragments/togglers').TogglersGetResAction} TogglersGetResAction
 *
 * @typedef {import('./fragments/users.list').UserListCommonAction} UserListCommonAction
 * @typedef {import('./fragments/users.list').UserListGetResAction} UserListGetResAction
 */

/**
 * @typedef {object} AdminPageInteractionInterface
 * @property {(data: {
 *  userForm?: UserFormSendKeysAction;
 * } ) =>  Promise<void>} sendKeys sendKeys method
 * @property {(data: {
 *  togglers?: TogglersCommonAction;
 *  userForm?: UserFormCommonAction;
 * } ) =>  Promise<void>} click click method
 * @property {(data: {
 *  togglers?: TogglersCommonAction;
 *  userForm?: UserFormCommonAction;
 *  usersList?: UserListCommonAction;
 * } ) =>  Promise<{
 *  togglers?: TogglersGetResAction;
 *  userForm?: UserFormGetResAction;
 *  usersList?: UserListGetResAction;
 * }>} get get method
 */

class AdminPage extends BasePage {
  constructor() {
    super('#admin_page', 'Admin page')
    this.togglers = this.init('.view_toggler', 'Toggler buttons', TogglersFragment);
    this.userForm = this.init('.admin_new_user', 'New user creation form', UserFormFragment);
    this.usersList = this.init('.admin_user_list_root', 'Users list', UsersListFragment)
  }
}

/**
 * @returns {AdminPageInteractionInterface}
 */
function getAdmin() {
  return new AdminPage()
}

module.exports = {
  getAdmin
}