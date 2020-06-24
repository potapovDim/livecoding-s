const {decoratePage, BasePage, $element} = require('../../../lib');

class TablesPage extends BasePage {
  constructor(page, pageRootSelector = '#table_page') {
    super(page, pageRootSelector)
    this.header = $element(this.page, '.header h3')
  }

  async getPageHeaderTitleContent() {
    return this.header.textContent();
  }
}
decoratePage(TablesPage)

module.exports = {
  TablesPage
}