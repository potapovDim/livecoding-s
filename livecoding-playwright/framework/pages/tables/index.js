const {waits} = require('../../../lib');
const {decoratePage} = require('../../../lib');

class TablesPage {
  constructor(page, pageRootSelector = '#table_page') {
    this.rootSelector = pageRootSelector;
    this.page = page;

  }

  //
  set replacePage(page) {
    this.page = page
  }

  async getPageHeaderTitleContent() {
    // TODO should be locate in base PAGE
    const elementHandle = await this.page.$('.header h3')
    return elementHandle.textContent();
  }
}
decoratePage(TablesPage)

module.exports = {
  TablesPage
}