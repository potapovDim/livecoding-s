// @ts-check
const {BaseFragment, Button} = require('../../../lib');

/**
 * @typedef {object} FooterCommonAction
 * @property {null} [openForm] openForm
 */

class FooterFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.openForm = this.init('button', 'Open feedback form', Button)
  }
}

module.exports = {
  FooterFragment
}