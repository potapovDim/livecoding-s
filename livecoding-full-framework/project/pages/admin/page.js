// @ts-check
const {BasePage} = require('../../../lib')
const {TogglersFragment} = require('./fragments/togglers');
const {UserFormFragment} = require('./fragments/new.user');
const {UsersListFragment} = require('./fragments/users.list');
const {FooterFragment} = require('../shared_fragments/footer')
const {AdminMessageFormFragment} = require('./fragments/message.form');

/**
 * @typedef {import('./fragments/message.form').AdminMessageFormCommonAction} AdminMessageFormCommonAction
 * @typedef {import('./fragments/message.form').AdminMessageFormSendKeys} AdminMessageFormSendKeys
 *
 * @typedef {import('../shared_fragments/footer').FooterCommonAction} FooterCommonAction
 *
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
 *  messageForm?: AdminMessageFormSendKeys;
 * } ) =>  Promise<void>} sendKeys sendKeys method
 * @property {(data: {
 *  togglers?: TogglersCommonAction;
 *  userForm?: UserFormCommonAction;
 *  footer?: FooterCommonAction;
 *  messageForm?: AdminMessageFormCommonAction;
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
    this.usersList = this.init('.admin_user_list_root', 'Users list', UsersListFragment);
    this.footer = this.init('xpath=//*[@id="admin_page"]/div[last()]', 'Footer', FooterFragment);
    this.messageForm = this.init('.message_modal', 'Admin messages form', AdminMessageFormFragment);
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