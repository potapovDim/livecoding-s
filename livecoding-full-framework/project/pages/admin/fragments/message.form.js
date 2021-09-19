// @ts-check
const {Collection} = require('../../../../lib');
const {MessageFormFragment} = require('../../shared_fragments/massege.form');
const {SessionItemFragment} = require('./session.item');

/**
 * @typedef {import('../../shared_fragments/massege.form').MessageFormCommonAction} MessageFormCommonAction
 * @typedef {import('../../shared_fragments/massege.form').MessageFormSendKeys} MessageFormSendKeys
 *
 * @typedef {import('./session.item').SessionItemCommonAction} SessionItemCommonAction
 * @typedef {import('./session.item').SessionItemGetResAction} SessionItemGetResAction
 */


/**
 * @typedef {MessageFormSendKeys} AdminMessageFormSendKeys
 */

/**
 * @typedef {{sessions?: {index?: number; action: SessionItemCommonAction;} & SessionItemGetResAction }} ExtendedAdminMessageFormCommonAction
 */

/**
 * @typedef {MessageFormCommonAction & ExtendedAdminMessageFormCommonAction} AdminMessageFormCommonAction
 */

/**
 * @typedef {object} AdminMessageFormGetResAction
 * @property {SessionItemGetResAction[]} [sessions] newUser
 */

class AdminMessageFormFragment extends MessageFormFragment {
  constructor(root, name) {
    super(root, name)
    this.sessions = this.init('.text-left > button', 'Session', Collection, SessionItemFragment);
  }
}

module.exports = {
  AdminMessageFormFragment,
}